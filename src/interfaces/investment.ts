export interface ITradeAsset {
  customerId: number;
  assetId: number;
  quantity: number;
  message?: string;
}

export interface IAssetTraded {
  customerId: number;
  assetId: number;
  quantity: number;
}

export interface IAssetPurchased extends IAssetTraded{
  totalPurchase: number;
  message?: string;
}

export interface IAssetSold extends IAssetTraded {
  totalSale: number;
  message?: string;
}
