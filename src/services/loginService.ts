import { generateJWTToken } from '../helpers/generateToken';
import { ILogin } from '../interfaces/login';
import LoginModel from '../models/loginModel';

export default {
  getCustomerLogin: async (userData: ILogin) => {
    const [customer] = await LoginModel.getCustomerLogin(userData);
    if (!customer) return { message: 'Full name and/or password is invalid' };
    const customerData = { ...customer };
    const token = generateJWTToken(customerData);
    return { token };
  },
};
