import { generateJWTToken } from '../helpers/generateToken';
import { ILogin } from '../interfaces/login';
import LoginModel from '../models/loginModel';

export default {
  getCustomerLogin: async (userData: ILogin) => {
    const customer = await LoginModel.getCustomerLogin(userData);
    if (customer.length === 0) return { message: 'Full name and/or password is invalid' };
    const { id, fullName, investorProfile } = customer[0];
    const token = generateJWTToken({ id, fullName, investorProfile });
    return { token };
  },
};
