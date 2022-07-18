import AccountModel from '../models/accountModel';
import { IAccountInput, IAccountOutput } from '../interfaces/account';

export default {
  getAll: async () => AccountModel.getAll(),

  getCustomerById: async (id: number) => {
    const [customerData] = await AccountModel.getCustomerById(id);
    const [accountStatement] = await AccountModel.getCustomerAccountBalance(id);
    return {
      fullName: customerData.fullName,
      investorProfile: customerData.investorProfile,
      accountBalance: +customerData.account_balance + +accountStatement.accountBalance,
    };
  },

  getAccountStatementByCustomerId: async (id: number) => (
    AccountModel.getAccountStatementByCustomerId(id)),

  setValueOnAccountByCustomerId: async (dataInput: IAccountInput) => {
    await AccountModel.setValueOnAccountByCustomerId(dataInput);
    return { message: 'Depósito realizado com sucesso' };
  },

  withdrawValueFromAccountByCustomerId: async (dataOutput: IAccountOutput) => {
    await AccountModel.withdrawValueFromAccountByCustomerId(dataOutput);
    return { message: 'Saque realizado com sucesso' };
  },
};
