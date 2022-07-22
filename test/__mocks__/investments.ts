export const buyAsset = {
  customerId: 1,
  assetId: 2,
  quantity: 5,
  totalPurchase: 82.2
}

export const sellAsset = {
  customerId: 1,
  assetId: 2,
  quantity: 5,
  totalSale: 82.2
}

export const assetById = [
  {
    assetId: 2,
    asset: 'BBDC4',
    price: 16.44,
    broker: 'XP Investimentos',
    amountAsset: 5000
  }
]

export const investmentsByCustomerId = [
  {
    customerId: 1,
    assetId: 1,
    asset: "ABEV3",
    amountAsset: 250,
    unitValue: 14.59,
    totalInvestments: 3647.50,
    sector: "Consumo"
  },
  {
    customerId: 1,
    assetId: 2,
    asset: "BBDC4",
    amountAsset: 10250,
    unitValue: 16.44,
    totalInvestments: 168510.00,
    sector: "Financeiro"
  },
  {
    customerId: 1,
    assetId: 3,
    asset: "EGIE3",
    amountAsset: 490,
    unitValue: 41.80,
    totalInvestments: 20482.00,
    sector: "Energia Elétrica"
  },
  {
    customerId: 1,
    assetId: 4,
    asset: "PETR4",
    amountAsset: 390,
    unitValue: 27.96,
    totalInvestments: 10904.40,
    sector: "Petróleo"
  }
]