import { ResultSetHeader } from 'mysql2';
import {
  ICustomers, IAccountStatementByCustomer,
  IAccountInput, IAccountOutput,
  IAssetByCustomerId, IAssetToCustody,
  IAccountBalance,
  IAccountByCustomer,
  IAccountStatementOfAllInvestments,
} from '../interfaces/account';

import Connection from './connection';

export default {
  getAllCustomers: async (): Promise<ICustomers[]> => {
    const query = 'SELECT id AS customerId, full_name AS fullName, investor_profile AS investorProfile FROM Customer;';
    const [result] = await Connection.execute(query);
    return result as ICustomers[];
  },

  deleteAssetsAtCustody: async (customerId: number) => {
    const query = 'DELETE FROM Customer_Custody WHERE customer_id = ?;';
    await Connection.execute(query, [customerId]);
  },

  getAllInvestmentsByCustomerId:
  async (customerId: number): Promise<IAccountStatementOfAllInvestments[]> => {
    const query = `SELECT CI.customer_id AS customerId, CI.asset_id AS assetId, CO.sector,
      SUM(CI.amount_asset_take) AS take,
      SUM(CI.amount_asset_sell) AS sold
      FROM Customer_Investments AS CI
      INNER JOIN Companies AS CO
      ON CI.asset_id = CO.asset_id
      WHERE CI.customer_id = ?
      GROUP BY CI.customer_id, CI.asset_id, CO.sector;`;
    const [result] = await Connection.execute(query, [customerId]);
    return result as IAccountStatementOfAllInvestments[];
  },

  setAssetsToCustody: async (custody: IAssetToCustody) => {
    const { customerId, assetId, amount, sector } = custody;
    const query = 'INSERT INTO Customer_Custody (customer_id, asset_id, amount_asset, sector) VALUES (?, ?, ?, ?);';
    await Connection.execute(query, [customerId, assetId, amount, sector]);
  },

  getAssetByCustomerId: async (id: number): Promise<IAssetByCustomerId[]> => {
    const query = `SELECT CC.customer_id AS customerId, CC.asset_id AS assetId, MA.asset,
      CC.amount_asset AS amountAsset, MA.Price AS unitValue, CC.amount_asset * MA.price AS totalInvestments, CC.sector
      FROM Customer_Custody AS CC
      INNER JOIN Market_Assets AS MA
      ON CC.asset_id = MA.id
      WHERE CC.customer_id = ?
      ORDER BY MA.asset`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAssetByCustomerId[];
  },
  // compara entradas e saídas
  getCustomerAccountBalance: async (id: number): Promise<IAccountBalance[]> => {
    const query = `SELECT SUM(X.inputs - X.outputs) AS accountBalance
    FROM (SELECT
    AT.customer_id,
    SUM(AT.account_input) AS inputs,
    0 AS outputs
    FROM Account_Statement AS AT
    GROUP BY AT.customer_id
    UNION ALL
    SELECT
    AT.customer_id,
    0 AS inputs,
    SUM(AT.account_output) AS outputs
    FROM Account_Statement AS AT
    GROUP BY AT.customer_id) X
    WHERE customer_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAccountBalance[];
  },
  // atualiza saldo
  updateAccountBalanceByCustomerId: async (id: number, accountBalance: number) => {
    const query = 'UPDATE Customer SET account_balance = ? WHERE id = ?';
    await Connection.execute<ResultSetHeader>(query, [accountBalance, id]);
  },

  getCustomerById: async (id: number): Promise<IAccountByCustomer[]> => {
    const query = `SELECT id AS customerId, full_name AS fullName, investor_profile AS investorProfile,
    account_balance AS accountBalance FROM Customer WHERE id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAccountByCustomer[];
  },
  // extrato
  getAccountStatementByCustomerId: async (id: number): Promise<IAccountStatementByCustomer[]> => {
    const query = `SELECT AT.date, AT.account_input AS accountInput, AT.account_output AS accountOutput
      FROM Customer AS CU
      INNER JOIN Account_Statement AS AT
      ON CU.id = AT.customer_id    
      WHERE customer_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAccountStatementByCustomer[];
  },
  // deposito
  insertDepositAtAccountByCustomerId:
  async (dataInput: IAccountInput) => {
    const { customerId, inputValue } = dataInput;
    const query = 'INSERT INTO Account_Statement (customer_id, account_input) VALUE (?, ?);';
    await Connection.execute<ResultSetHeader>(query, [customerId, inputValue]);
  },
  // saque
  insertWithdrawAtAccountByCustomerId: async (dataOutput: IAccountOutput) => {
    const { customerId, outputValue } = dataOutput;
    const query = 'INSERT INTO Account_Statement (customer_id, account_output) VALUE (?, ?);';
    await Connection.execute<ResultSetHeader>(query, [customerId, outputValue]);
  },
};
