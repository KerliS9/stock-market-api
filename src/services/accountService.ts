import AccountModel from '../models/accountModel';

export default {
  getAll: async () => AccountModel.getAll(),

  getCustomerById: async (id: number) => AccountModel.getCustomerById(id),

  getAccountStatementByCustomerId: async (id: number) => (
    AccountModel.getAccountStatementByCustomerId(id)),

  /* setValueOnAccountByCustomerId: async (dataInput: object) => {
    const data = await AccountModel.setValueOnAccountByCustomerId(dataInput);
    return data;
  }, */
};
