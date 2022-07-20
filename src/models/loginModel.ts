import { RowDataPacket } from 'mysql2';
import Connection from './connection';
import { ILogin } from '../interfaces/login';

export default {
  getCustomerLogin: async (userData: ILogin) => {
    const { fullName, password } = userData;
    const query = `SELECT id, full_name, investor_profile
    FROM Customer WHERE full_name = ? AND password = ?;`;
    const [result] = await Connection.execute<RowDataPacket[]>(query, [fullName, password]);
    return result;
  },
};
