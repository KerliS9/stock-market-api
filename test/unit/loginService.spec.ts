import LoginModel from '../../src/models/loginModel';
import LoginService from '../../src/services/loginService';
import { customer, login, wrongLogin } from '../__mocks__/login';

describe('Check Login Service POST: getCustomerLogin from database', () => {    
  it('should return an object that contains the keys token', async () => {
    jest.spyOn(LoginModel, 'getCustomerLogin').mockResolvedValue(customer);
    const response = await LoginService.getCustomerLogin(login);
    expect(response).toHaveProperty('token');
  });

  it('when customer is not at the database', async () => {
    jest.spyOn(LoginModel, 'getCustomerLogin').mockResolvedValue([]);
    const response = await LoginService.getCustomerLogin(wrongLogin);
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Full name and/or password is invalid');
  });
});