import InvestmentsModel from '../models/investmentsModel';
import { ITakeAsset } from '../interfaces/investment';
import AssetModel from '../models/assetModel';
import AccountModel from '../models/accountModel';

export default {
  takeStock: async (asset: ITakeAsset) => {
    const { customerId, ativoId, quantity } = asset;
    const { insertId } = await InvestmentsModel.takeStock(asset);
    console.log('insertId', insertId);
    const assetOnBroker = await AssetModel.getAssetById(ativoId);
    console.log('assetOnBroker', assetOnBroker[0]);
    const { amountAsset, price } = assetOnBroker[0];
    const newQuantity = amountAsset - quantity;
    await InvestmentsModel.updateAmountAssetOnBrokerageFirm(newQuantity, ativoId);
    const outputValue = asset.quantity * price;
    const dataOutput = { customerId, outputValue };
    await AccountModel.withdrawValueFromAccountByCustomerId(dataOutput);
    return asset;
  },
};
