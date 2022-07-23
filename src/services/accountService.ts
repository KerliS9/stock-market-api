import AccountModel from '../models/accountModel';
import { IAccountInput, IAccountOutput } from '../interfaces/account';
import { IError } from '../interfaces/error';

export default {
  getAllCustomers: async () => AccountModel.getAllCustomers(),

  getAssetByCustomerId: async (id: number) => {
    await AccountModel.deleteAssetsAtCustody(id);
    const allInvestments = await AccountModel.getAllInvestmentsByCustomerId(id);
    await Promise.all(allInvestments.map(async ({ customerId, assetId, sector, take, sold }) => {
      const amount = take - sold;
      const custody = { customerId, assetId, amount, sector };
      await AccountModel.setAssetsToCustody(custody);
    }));
    const assetsByCustomerId = await AccountModel.getAssetByCustomerId(id);
    return assetsByCustomerId;
  },

  getCustomerById: async (id: number) => {
    const accountStatement = await AccountModel.getCustomerAccountBalance(id);
    const { accountBalance } = accountStatement[0];
    await AccountModel.updateAccountBalanceByCustomerId(id, accountBalance);
    const customerData = await AccountModel.getCustomerById(id);
    return customerData;
  },

  getAccountStatementByCustomerId: async (id: number) => (
    AccountModel.getAccountStatementByCustomerId(id)),

  insertDepositAtAccountByCustomerId:
  async (dataInput: IAccountInput): Promise<IAccountInput | IError> => {
    if (dataInput.inputValue <= 0) return { message: 'Sorry, value to pay into an account need to be greater than 0' };
    await AccountModel.insertDepositAtAccountByCustomerId(dataInput);
    return dataInput;
  },

  insertWithdrawAtAccountByCustomerId:
  async (dataOutput: IAccountOutput): Promise<IAccountOutput | IError> => {
    if (dataOutput.outputValue <= 0) return { message: 'Sorry, value to withdraw from account need to be greater than 0' };
    const result = await AccountModel.getCustomerAccountBalance(dataOutput.customerId);
    if (result[0].accountBalance < dataOutput.outputValue) return { message: 'Sorry, you do not have so much money available in your account' };
    await AccountModel.insertWithdrawAtAccountByCustomerId(dataOutput);
    return dataOutput;
  },
};
