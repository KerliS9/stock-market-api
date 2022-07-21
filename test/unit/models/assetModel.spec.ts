import Connection from '../../../src/models/connection';
import AssetModel from '../../../src/models/assetModel';
import { assets, assetById } from '../../__mocks__/assets';

/* describe('Check Asset Model GET: getAll assets from database', () => {    
    it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    jest.spyOn(Connection, 'execute').mockResolvedValue(assets as any);
    const response = await AssetModel.getAllAssets();
    // console.log('getall', response);
    expect(response).toEqual(expect.arrayContaining(assets));
    expect(response[0]).toHaveProperty('id');
    expect(response[0]).toHaveProperty('asset');
    expect(response[0]).toHaveProperty('price');
    expect(response[0]).toHaveProperty('sector');
    expect(response[0]).toHaveProperty('company');
  });
});

describe('Check Asset Model GET: getAssetById from database', () => {
  it('should return an array of one object that contains the keys assetId, asset, price, broker, amountAsset', async () => {
    jest.spyOn(Connection, 'execute').mockResolvedValue(assetById as any);
    const response = await AssetModel.getAssetById(1);
    expect(response).toMatchObject(assetById);
  });
}); */
