export interface ITradeAsset {
  customerId: number;
  ativoId: number;
  quantity: number;
}

export interface IAssetTraded {
  ativoId: number;
  quantity: number;
}

export interface IAssetPurchased extends IAssetTraded{
  purchasePrice: number;
}

export interface IAssetSold extends IAssetTraded {
  salePrice: number;
}
