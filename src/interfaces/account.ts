export interface IAccount {
  customerId: number;
  fullName: string;
  investorProfile: string;
  accountBalance: number;
}

/* export interface IAccountByCustomer {
  customerId: number;
  fullName: string;
  investorProfile: string;
  accountBalance: number;
} */

export interface IAccountByCustomer {
  customerId: number;
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
