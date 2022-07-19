import AssetModel from '../models/assetModel';

export default {
  getAll: async () => AssetModel.getAll(),

  getAssetById: async (id: number) => AssetModel.getAssetById(id),

  getAssetByCustomerId: async (id: number) => {
    const result = await AssetModel.getAllInvestmentsByCustomerId(id);
    console.log(result);
    // inserir com map na tabela Customer_Custody;
    const test = await AssetModel.getAssetByCustomerId(id);
    return test;
  },
};
