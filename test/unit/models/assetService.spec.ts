import AssetModel from '../../../src/models/assetModel';
import AssetService from '../../../src/services/assetService';
import { assets, assetById } from '../../__mocks__/assets';

describe('Check Asset Service GET: getAllAssets assets from database', () => {    
    it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    jest.spyOn(AssetModel, 'getAllAssets').mockResolvedValue(assets);
    const response = await AssetService.getAllAssets();
    expect(response).toEqual(expect.arrayContaining(assets));
    expect(response[0]).toHaveProperty('id');
    expect(response[0]).toHaveProperty('asset');
    expect(response[0]).toHaveProperty('price');
    expect(response[0]).toHaveProperty('sector');
    expect(response[0]).toHaveProperty('company');
  });
});

describe('Check Asset Service GET: getAssetById from database', () => {
  it('should return an array of one object that contains the keys assetId, asset, price, broker, amountAsset', async () => {
    jest.spyOn(AssetModel, 'getAssetById').mockResolvedValue(assetById as any);
    const response = await AssetService.getAssetById(1);
    expect(response).toHaveLength(1);
  });
});
