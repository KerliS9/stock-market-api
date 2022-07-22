import AssetModel from '../../src/models/assetModel';
import AssetService from '../../src/services/assetService';
import { assets, assetById } from '../__mocks__/assets';

describe('Check Asset Service GET: getAllAssets from database', () => {    
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
  it(`when customer exits on database - should return an array of one object that contains the 
  keys assetId, asset, price, broker, amountAsset`, async () => {
    jest.spyOn(AssetModel, 'getAssetById').mockResolvedValue(assetById);
    const [response] = await AssetService.getAssetById(1);
    expect(response).toHaveProperty('assetId');
    expect(response).toHaveProperty('asset');
    expect(response).toHaveProperty('price');
    expect(response).toHaveProperty('broker');
    expect(response).toHaveProperty('amountAsset');
  });

  it('when don\t exists the assetId on database', async () => {
    jest.spyOn(AssetModel, 'getAssetById').mockResolvedValue([]);
    const [response] = await AssetService.getAssetById(1);
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Sorry, this assetId does not exits in our database');
  })
});
