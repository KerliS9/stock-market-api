import { getMockReq, getMockRes } from '@jest-mock/express';
import AssetsController from '../../src/controllers/assetController';
import AssetService from '../../src/services/assetService';
import { assets, assetById, messageAssetById } from '../__mocks__/assets';

describe('Check Assets Controller GET: getAllAssets from database', () => {
  it('should return an array of objects', async () => {
    const req = getMockReq();

    const { res } = getMockRes();

    jest.spyOn(AssetService, 'getAllAssets').mockResolvedValue(assets);
    await AssetsController.getAllAssets(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(assets);
  });
});

describe('Check Assets Controller GET: getAssetById from database', () => {
  it('should return an object that contains the customer information', async () => {
    const req = getMockReq({
      params: {
        id: '1',
      } });

    const { res } = getMockRes();

    jest.spyOn(AssetService, 'getAssetById').mockResolvedValue(assetById);
    await AssetsController.getAssetById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(assetById[0]);
  });

  it('should return an object', async () => {
    const req = getMockReq({
      params: {
        id: '10',
      } });

    const { res } = getMockRes();

    jest.spyOn(AssetService, 'getAssetById').mockResolvedValue(messageAssetById);
    await AssetsController.getAssetById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(messageAssetById[0]));
  });
});
