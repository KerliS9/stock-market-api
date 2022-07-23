export const customerById = [
  {
    customerId: 1,
    fullName: 'Kerli Schroeder',
    investorProfile: 'Arrojado',
    accountBalance: 15200.7,
  },
];

export const AccountStatement = {
  accountBalance: 15200.7,
};

export const withdrawByCustomerId = {
  customerId: 1,
  outputValue: 10,
};

export const withdrawByCustomerIdWithoutValue = {
  customerId: 1,
  outputValue: 0,
};

export const depositByCustomerId = {
  customerId: 1,
  inputValue: 50,
};

export const depositByCustomerIdWithoutValue = {
  customerId: 1,
  inputValue: 0,
};

export const accountBalance = [
  {
    accountBalance: 100,
  },
];

export const messageCustomerById = { 
  message: 'Sorry, your are not authorized to get this information' 
};

export const messageInputValue = {
  message: 'Sorry, value to deposit into account need to be greater than 0',
}

export const messageOutputValue = {
  message: 'Sorry, value to withdraw from account need to be greater than 0',
}

export const customers = [
  {
    customerId: 1,
    fullName: 'Kerli Schroeder',
    investorProfile: 'Arrojado',
  },
  {
    customerId: 2,
    fullName: 'Mauricio Gerahrdt',
    investorProfile: 'Arrojado',
  },
  {
    customerId: 3,
    fullName: 'Joao Silva',
    investorProfile: 'Arrojado',
  },
  {
    customerId: 4,
    fullName: 'Marco Antonio',
    investorProfile: 'Moderado',
  },
  {
    customerId: 5,
    fullName: 'Maria Julia',
    investorProfile: 'Conservador',
  },
];

export const investmentsByCustomerId = [
  {
    customerId: 1,
    assetId: 1,
    asset: 'ABEV3',
    amountAsset: 250,
    unitValue: 14.59,
    totalInvestments: 3647.50,
    sector: 'Consumo',
  },
  {
    customerId: 1,
    assetId: 2,
    asset: 'BBDC4',
    amountAsset: 10250,
    unitValue: 16.44,
    totalInvestments: 168510.00,
    sector: 'Financeiro',
  },
  {
    customerId: 1,
    assetId: 3,
    asset: 'EGIE3',
    amountAsset: 490,
    unitValue: 41.80,
    totalInvestments: 20482.00,
    sector: 'Energia Elétrica',
  },
  {
    customerId: 1,
    assetId: 4,
    asset: 'PETR4',
    amountAsset: 390,
    unitValue: 27.96,
    totalInvestments: 10904.40,
    sector: 'Petróleo',
  },
];

export const customerByIdAccountStatement = [
  {
    date: new Date('2022-07-21T18:11:19.000Z'),
    accountInput: 500.00,
    accountOutput: 100.00,
  },
  {
    date: new Date('2022-07-21T18:11:19.000Z'),
    accountInput: 200.00,
    accountOutput: 100.00,
  },
  {
    date: new Date('2022-07-21T18:11:19.000Z'),
    accountInput: 300.00,
    accountOutput: 400.00,
  },
];

export const accountStatementOfAllInvestments = [
  {
    customerId: 1,
    assetId: 1,
    sector: 'Consumo',
    take: 100,
    sold: 10,
  },
  {
    customerId: 1,
    assetId: 2,
    sector: 'Financeiro',
    take: 200,
    sold: 10,
  },
  {
    customerId: 1,
    assetId: 3,
    sector: 'Energia Elétrica',
    take: 500,
    sold: 10,
  },
  {
    customerId: 1,
    assetId: 4,
    sector: 'Petróleo',
    take: 400,
    sold: 10,
  },
];
