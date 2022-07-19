import { ResultSetHeader, RowDataPacket } from 'mysql2';
import {
  ICustomers, IAccountStatementByCustomer,
  IAccountInput, IAccountOutput,
} from '../interfaces/account';
import Connection from './connection';

export default {
  getAll: async (): Promise<ICustomers[]> => {
    const query = 'SELECT id AS customerId, full_name AS fullName, investor_profile AS investorProfile FROM Customer;';
    const [result] = await Connection.execute(query);
    return result as ICustomers[];
  },
  // saldo
  getCustomerAccountBalance: async (id: number) => {
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
    const [result] = await Connection.execute<RowDataPacket[]>(query, [id]);
    return result;
  },
  // saldo
  getCustomerById: async (id: number) => {
    const query = `SELECT id, full_name, investor_profile, account_balance
      FROM Customer WHERE id = ?;`;
    const [result] = await Connection.execute<RowDataPacket[]>(query, [id]);
    return result;
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
  setValueOnAccountByCustomerId: async (dataInput: IAccountInput): Promise<ResultSetHeader> => {
    const { customerId, inputValue } = dataInput;
    const query = 'INSERT INTO Account_Statement (customer_id, account_input) VALUE (?, ?);';
    const [result] = await Connection.execute<ResultSetHeader>(query, [customerId, inputValue]);
    return result;
  },
  // saque
  withdrawValueFromAccountByCustomerId: async (dataOutput: IAccountOutput):
  Promise<ResultSetHeader> => {
    const { customerId, outputValue } = dataOutput;
    const query = 'INSERT INTO Account_Statement (customer_id, account_output) VALUE (?, ?);';
    const [result] = await Connection.execute<ResultSetHeader>(query, [customerId, outputValue]);
    return result;
  },
};
