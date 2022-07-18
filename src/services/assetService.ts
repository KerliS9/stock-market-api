import AssetModel from '../models/assetModel';

export default {
  getAll: async () => AssetModel.getAll(),

  getAssetById: async (id: number) => AssetModel.getAssetById(id),

  getAssetByCustomerId: async (id: number) => AssetModel.getAssetByCustomerId(id),
};
