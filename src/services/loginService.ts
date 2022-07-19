import { ILogin } from '../interfaces/login';
import LoginModel from '../models/loginModel';

export default {
  getCustomerLogin: async (userData: ILogin) => {
    const customer = await LoginModel.getCustomerLogin(userData);
    console.log(customer);
    return customer;
  },
};
