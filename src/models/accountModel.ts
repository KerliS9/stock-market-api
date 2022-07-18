import Connection from './connection';

export default {
  getAll: async () => {
    const query = 'SELECT full_name AS fullName, investor_profile AS investorProfile, account_balance AS accountBalance FROM Customer;';
    const [result] = await Connection.execute(query);
    return result;
  },

  getCustomerById: async () => {
    const query = 'SELECT full_name AS fullName, investor_profile AS investorProfile, account_balance AS accountBalance FROM Customer;';
    const [result] = await Connection.execute(query);
    return result;
  },
};
