export interface IAssetByAssetId {
  assetId: number;
  asset: string;
  price: number;
  broker: string;
  amountAsset: number;
}

export interface IAsset {
  id: number;
  asset: string;
  price: number;
}

export interface IAssetByCustomerId {
  customerId: number;
  assetId: string;
  amountAsset: number;
  unitPrice: number;
  totalInvestments: number;
}
