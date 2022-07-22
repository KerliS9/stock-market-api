import { generateJWTToken } from '../helpers/generateToken';
import { ILogin } from '../interfaces/login';
import LoginModel from '../models/loginModel';

export default {
  getCustomerLogin: async (userData: ILogin) => {
    const customer = await LoginModel.getCustomerLogin(userData);
    if (customer.length === 0) return { message: 'Full name and/or password is invalid' };
    const destructuringData = [customer];
    const customerData = { ...destructuringData };
    const token = generateJWTToken(customerData);
    return { token };
  },
};
