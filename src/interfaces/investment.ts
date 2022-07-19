export interface ITradeAsset {
  customerId: number;
  assetId: number;
  quantity: number;
}

export interface IAssetTraded {
  customerId: number;
  assetId: number;
  quantity: number;
}

export interface IAssetPurchased extends IAssetTraded{
  totalPurchase: number;
}

export interface IAssetSold extends IAssetTraded {
  totalSale: number;
}
