import InvestmentsModel from '../models/investmentsModel';
import { ITradeAsset, IAssetPurchased, IAssetSold } from '../interfaces/investment';
import { IError } from '../interfaces/error';
import AssetModel from '../models/assetModel';
import AccountModel from '../models/accountModel';
import AccountService from './accountService';

export default {
  buyAsset: async (asset: ITradeAsset): Promise<IAssetPurchased | IError> => {
    const { customerId, assetId, quantity } = asset;
    const profileRisk = await AccountModel.getCustomerById(customerId);
    if (profileRisk[0].investorProfile !== 'Arrojado') {
      return {
        message: 'Sorry, this operation is not available to your investor profile',
      };
    }
    const assetOnBroker = await AssetModel.getAssetById(assetId);
    const { amountAsset, price } = assetOnBroker[0];
    const newQuantity = amountAsset - quantity;
    if (newQuantity < 0) return { message: 'This quantity is not available at this broker for this asset' };
    await InvestmentsModel.buyAsset(asset);
    await InvestmentsModel.updateAmountAssetAtBrokerageFirm(newQuantity, assetId);
    const outputValue = asset.quantity * price;
    const dataOutput = { customerId, outputValue };
    await AccountModel.insertWithdrawAtAccountByCustomerId(dataOutput);
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
    const assetToSell = assetsOnCustody.filter((a) => a.assetId === assetId);
    if (assetToSell[0].amountAsset < quantity) return { message: 'Sorry, you do not have this amount of this asset to sell' };
    await InvestmentsModel.sellAsset(asset);
    const assetOnBroker = await AssetModel.getAssetById(assetId);
    const { amountAsset, price } = assetOnBroker[0];
    const newQuantity = amountAsset + quantity;
    await InvestmentsModel.updateAmountAssetAtBrokerageFirm(newQuantity, assetId);
    const inputValue = quantity * price;
    const dataInput = { customerId, inputValue };
    await AccountModel.insertDepositAtAccountByCustomerId(dataInput);
    return {
      customerId,
      assetId,
      quantity,
      totalSale: inputValue,
    };
  },
};
