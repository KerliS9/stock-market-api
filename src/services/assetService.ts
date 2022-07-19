import AssetModel from '../models/assetModel';

export default {
  getAll: async () => AssetModel.getAll(),

  getAssetById: async (id: number) => AssetModel.getAssetById(id),

  getAssetByCustomerId: async (id: number) => {
    await AssetModel.deleteAssetsOnCustody(id);
    const allInvestments = await AssetModel.getAllInvestmentsByCustomerId(id);
    await Promise.all(allInvestments.map(async ({ customerId, assetId, sector, take, sold }) => {
      const amount = take - sold;
      const custody = { customerId, assetId, amount, sector };
      await AssetModel.setAssetsToCustody(custody);
    }));
    const assetsByCustomerId = await AssetModel.getAssetByCustomerId(id);
    return assetsByCustomerId;
  },
};
