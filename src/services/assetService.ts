import AssetModel from '../models/assetModel';

export default {
  getAllAssets: async () => AssetModel.getAllAssets(),

  getAssetById: async (id: number) => {
    const asset = await AssetModel.getAssetById(id);
    console.log('service', asset);
    if (asset.length === 0) return [{ message: 'Sorry, this assetId does not exits in our database' }];
    return asset;
  },
};
