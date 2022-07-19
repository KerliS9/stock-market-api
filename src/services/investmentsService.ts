import InvestmentsModel from '../models/investmentsModel';
import { ITradeAsset, IAssetPurchased, IAssetSold } from '../interfaces/investment';
import AssetModel from '../models/assetModel';
import AccountModel from '../models/accountModel';

export default {
  buyAsset: async (asset: ITradeAsset): Promise<IAssetPurchased> => {
    const { customerId, ativoId, quantity } = asset;
    await InvestmentsModel.buyAsset(asset);
    // console.log('insertId', insertId);
    const assetOnBroker = await AssetModel.getAssetById(ativoId);
    // console.log('assetOnBroker', assetOnBroker[0]);
    const { amountAsset, price } = assetOnBroker[0];
    const newQuantity = amountAsset - quantity;
    await InvestmentsModel.updateAmountAssetOnBrokerageFirm(newQuantity, ativoId);
    const outputValue = asset.quantity * price;
    const dataOutput = { customerId, outputValue };
    await AccountModel.withdrawValueFromAccountByCustomerId(dataOutput);
    return {
      customerId,
      ativoId,
      quantity,
      totalPurchase: outputValue,
    };
  },

  sellAsset: async (asset: ITradeAsset): Promise<IAssetSold> => {
    const { customerId, ativoId, quantity } = asset;
    await InvestmentsModel.sellAsset(asset);
    const assetOnBroker = await AssetModel.getAssetById(ativoId);
    const { amountAsset, price } = assetOnBroker[0];
    const newQuantity = amountAsset + quantity;
    await InvestmentsModel.updateAmountAssetOnBrokerageFirm(newQuantity, ativoId);
    const inputValue = quantity * price;
    const dataInput = { customerId, inputValue };
    await AccountModel.setValueOnAccountByCustomerId(dataInput);
    return {
      customerId,
      ativoId,
      quantity,
      totalSale: inputValue,
    };
  },
};
