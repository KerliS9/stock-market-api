export interface ITradeAsset {
  customerId: number;
  ativoId: number;
  quantity: number;
}

export interface IAssetTraded {
  customerId: number;
  ativoId: number;
  quantity: number;
}

export interface IAssetPurchased extends IAssetTraded{
  totalPurchase: number;
}

export interface IAssetSold extends IAssetTraded {
  totalSale: number;
}
