export interface ITakeAsset {
  customerId: number;
  ativoId: number;
  quantity: number;
}

export interface IAssetPurchased {
  ativoId: number;
  quantity: number;
  purchasePrice: number;
}
