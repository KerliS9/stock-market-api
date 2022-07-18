import InvestmentsModel from '../models/investmentsModel';
import { ITakeAsset } from '../interfaces/investment';

export default {
  takeStock: async (asset: ITakeAsset) => {
    const { insertId } = await InvestmentsModel.takeStock(asset);
    console.log('insertId', insertId);
    return asset;
  },
};
