import AccountModel from '../models/accountModel';

export default {
  getAll: async () => AccountModel.getAll(),

  getCustomerById: async (id: number) => AccountModel.getCustomerById(id),

  getAccountStatementCustomerById: async (id: number) => (
    AccountModel.getAccountStatementCustomerById(id)),
};
