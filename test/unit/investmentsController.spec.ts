import { getMockReq, getMockRes } from '@jest-mock/express';
import InvestmentsController from '../../src/controllers/investmentsController';
import { buyAsset, sellAsset } from '../__mocks__/investments';

describe('Check Investments Controller POST: buy asset for customer that requested', () => {
  it('should return an object', async () => {
    const req = getMockReq({
      body: {
        customerId: 1,
        assetId: 2,
        quantity: 5,
      } });

    const { res } = getMockRes();

    await InvestmentsController.buyAsset(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(buyAsset));
  });
});

describe('Check Investments Controller POST: buy asset for customer that requested', () => {
  it('should return an object', async () => {
    const req = getMockReq({
      body: {
        customerId: 1,
        assetId: 2,
        quantity: 5,
      } });

    const { res } = getMockRes();

    await InvestmentsController.sellAsset(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(sellAsset));
  });
});
