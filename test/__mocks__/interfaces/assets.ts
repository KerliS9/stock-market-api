export interface IAssetById {
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