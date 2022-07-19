import AccountModel from '../models/accountModel';
import { IAccountByCustomer, IAccountInput, IAccountOutput } from '../interfaces/account';

export default {
  getAll: async () => AccountModel.getAll(),

  getCustomerById: async (id: number): Promise<IAccountByCustomer> => {
    const [customerData] = await AccountModel.getCustomerById(id);
    const [accountStatement] = await AccountModel.getCustomerAccountBalance(id);
    return {
      customerId: customerData.id,
      fullName: customerData.full_name,
      investorProfile: customerData.investor_profile,
      accountBalance: +customerData.account_balance + +accountStatement.accountBalance,
    };
  },

  getAccountStatementByCustomerId: async (id: number) => (
    AccountModel.getAccountStatementByCustomerId(id)),

  setValueOnAccountByCustomerId: async (dataInput: IAccountInput) => {
    await AccountModel.setValueOnAccountByCustomerId(dataInput);
    return dataInput;
  },

  withdrawValueFromAccountByCustomerId: async (dataOutput: IAccountOutput) => {
    await AccountModel.withdrawValueFromAccountByCustomerId(dataOutput);
    return dataOutput;
  },
};
