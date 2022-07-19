import InvestmentsModel from '../models/investmentsModel';
import { ITradeAsset, IAssetPurchased, IAssetSold, IError } from '../interfaces/investment';
import AssetModel from '../models/assetModel';
import AccountModel from '../models/accountModel';
import AccountService from './accountService';
// import HttpException from '../helpers/httpException';

export default {
  buyAsset: async (asset: ITradeAsset): Promise<IAssetPurchased | IError> => {
    const { customerId, assetId, quantity } = asset;
    await InvestmentsModel.buyAsset(asset);
    const assetOnBroker = await AssetModel.getAssetById(assetId);
    const { amountAsset, price } = assetOnBroker[0];
    const newQuantity = amountAsset - quantity;
    if (newQuantity < 0) return { message: 'This quantity is not available at this broker for this asset' };
    await InvestmentsModel.updateAmountAssetOnBrokerageFirm(newQuantity, assetId);
    const outputValue = asset.quantity * price;
    const dataOutput = { customerId, outputValue };
    await AccountModel.withdrawValueFromAccountByCustomerId(dataOutput);
    return {
      customerId,
      assetId,
      quantity,
      totalPurchase: outputValue,
    };
  },

  sellAsset: async (asset: ITradeAsset): Promise<IAssetSold | IError> => {
    const { customerId, assetId, quantity } = asset;
    const assetsOnCustody = await AccountService.getAssetByCustomerId(customerId);
    const [assetToSell] = assetsOnCustody.filter((a) => a.assetId === assetId);
    if (assetToSell.amountAsset < quantity) return { message: 'Sorry, you do not have this amount of this asset to sell' };
    await InvestmentsModel.sellAsset(asset);
    const assetOnBroker = await AssetModel.getAssetById(assetId);
    const { amountAsset, price } = assetOnBroker[0];
    const newQuantity = amountAsset + quantity;
    await InvestmentsModel.updateAmountAssetOnBrokerageFirm(newQuantity, assetId);
    const inputValue = quantity * price;
    const dataInput = { customerId, inputValue };
    await AccountModel.setValueOnAccountByCustomerId(dataInput);
    return {
      customerId,
      assetId,
      quantity,
      totalSale: inputValue,
    };
  },
};
