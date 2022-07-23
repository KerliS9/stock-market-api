import { getMockReq, getMockRes } from '@jest-mock/express';
import LoginService from '../../src/services/loginService';
import LoginController from '../../src/controllers/loginController';
import { token, loginError } from '../__mocks__/login';

describe('Check Login Controller POST: verify access to platform', () => {
  it('should return an object', async () => {
    const req = getMockReq({
      body: {
        fullName: 'Kerli Schroeder',
        password: '214563'
      } });

    const { res } = getMockRes();

    jest.spyOn(LoginService, 'getCustomerLogin').mockResolvedValue(token);
    await LoginController.getCustomerLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(token));
  });

  it('when there are error on data informed from customer', async () => {
    const req = getMockReq({
      body: {
        fullName: 'KerliSchroeder',
        password: '21456311'
      } });

    const { res } = getMockRes();

    jest.spyOn(LoginService, 'getCustomerLogin').mockResolvedValue(loginError);
    await LoginController.getCustomerLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(loginError));
  });
});
