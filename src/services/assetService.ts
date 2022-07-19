import AssetModel from '../models/assetModel';

export default {
  getAll: async () => AssetModel.getAll(),

  getAssetById: async (id: number) => AssetModel.getAssetById(id),
};
