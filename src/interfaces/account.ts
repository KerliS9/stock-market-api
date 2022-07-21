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
  message?: string;
}

export interface IAccountStatementByCustomer {
  date: Date;
  accountInput: number;
  accountOutput: number;
}

export interface IAccountInput {
  customerId: number;
  inputValue: number;
  message?: string;
}

export interface IAccountOutput {
  customerId: number;
  outputValue: number;
  message?: string;
}

export interface IAssetByCustomerId {
  customerId: number;
  assetId: number;
  asset: string;
  amountAsset: number;
  unitValue: number;
  totalInvestments: number;
  sector: string;
}

export interface IAssetToCustody {
  customerId: number;
  assetId: number;
  amount: number;
  sector: string;
}

export interface IAccountBalance {
  accountBalance: number;
}
