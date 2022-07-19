export interface ICustomers {
  customerId: number;
  fullName: string;
  investorProfile: string;
}

export interface IAccountByCustomer {
  customerId: number;
  fullName: string;
  investorProfile: string;
  accountBalance: number;
}

export interface IAccountStatementByCustomer {
  date: Date;
  accountInput: number;
  accountOutput: number;
}

export interface IAccountInput {
  customerId: number;
  inputValue: number;
}

export interface IAccountOutput {
  customerId: number;
  outputValue: number;
}
