import AssetModel from '../models/assetModel';

export default {
  getAllAssets: async () => AssetModel.getAllAssets(),

  getAssetById: async (id: number) => AssetModel.getAssetById(id),
};
