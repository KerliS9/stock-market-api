import { IAccountByCustomer, IAccount } from '../interfaces/account';
import Connection from './connection';

export default {
  getAll: async (): Promise<IAccount[]> => {
    const query = `SELECT id AS customerId, full_name AS fullName, investor_profile AS investorProfile,
    account_balance AS accountBalance FROM Customer;`;
    const [result] = await Connection.execute(query);
    return result as IAccount[];
  },

  getCustomerById: async (id: number): Promise<IAccountByCustomer[]> => {
    const query = `SELECT id AS customerId, full_name AS fullName, investor_profile AS investorProfile,
      account_balance AS accountBalance FROM Customer WHERE id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAccountByCustomer[];
  },
};
