import { expect } from 'chai';
import sinon from 'sinon';
import AssetController from '../../../src/controllers/assetController';
import AssetService from '../../../src/services/assetService';
import { assets, assetById } from '../../__mocks__/assets';

describe('Check Asset Service GET: getAllAssets assets from database', () => {    
  it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    let req;
    let res;
    let assetService;
    beforeEach(() => {
      // req = { params: { id: faker.random.uuid() } };
      res = { json: function() {} };
      const userRepo = sinon.spy();
      // assetService = AssetService.getAllAssets(userRepo);
    });
  // const response = await AssetController.getAllAssets(Request, Response);
  const mock = sinon.mock(res);
      mock
        .expects("json")
        .once()
        .withExactArgs({ data: assets });
      const stub = sinon.stub(AssetService, 'getAllAssets').returns(assets as any);
      // assetController = AssetController.getAllAssets(assetService);
      const user = await AssetController.getAllAssets(req, res);
      expect(stub.calledOnce).to.be.true;
      mock.verify();
});
});
/* describe('Check Asset Service GET: getAllAssets assets from database', () => {    
    it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    jest.fn(AssetService, 'getAllAssets').mockResolvedValue(assets);
    const response = await AssetController.getAllAssets(Request, Response);
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
    jest.spyOn(AssetService, 'getAssetById').mockResolvedValue(assetById as any);
    const response = await AssetController.getAssetById(Request, Response);
    expect(response).toHaveLength(1);
  });
});
 */