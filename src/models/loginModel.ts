import Connection from './connection';
import { ILogin, IUserData } from '../interfaces/login';

export default {
  getCustomerLogin: async (userData: ILogin): Promise<IUserData[]> => {
    const { fullName, password } = userData;
    const query = `SELECT id, full_name AS fullName, investor_profile AS investorProfile
    FROM Customer WHERE full_name = ? AND password = ?;`;
    const [result] = await Connection.execute(query, [fullName, password]);
    return result as IUserData[];
  },
};
