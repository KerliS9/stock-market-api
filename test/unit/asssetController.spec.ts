import { getMockReq, getMockRes } from '@jest-mock/express';
import AssetsController from '../../src/controllers/assetController';
import { assetsController, assetByIdController } from '../__mocks__/assets';

describe('Check Assets Controller GET: getAllAssets from database', () => {
  it('should return an object', async () => {
    const req = getMockReq();

    const { res } = getMockRes();

    await AssetsController.getAllAssets(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(assetsController);
  });
});

describe('Check Assets Controller GET: getAssetById from database', () => {
  it('should return an object', async () => {
    const req = getMockReq({
      params: {
        id: '1',
      } });

    const { res } = getMockRes();

    await AssetsController.getAssetById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(assetByIdController);
  });
});
