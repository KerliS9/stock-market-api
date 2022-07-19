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
  sector: string;
  company: string;
}

export interface IAssetByCustomerId {
  customerId: number;
  assetId: number;
  asset: string;
  amountAsset: number;
  totalInvestments: number;
  sector: string;
}

export interface IAssetToCustody {
  customerId: number;
  assetId: number;
  amount: number;
  sector: string;
}
