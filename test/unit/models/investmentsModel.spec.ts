import Connection from '../../../src/models/connection';
import InvestmentsModel from '../../../src/models/investmentsModel';
import { tradeAsset } from '../../__mocks__/investments';

import request from 'supertest';
import makeApp from '../app';
import { jest } from '@jest/globals';

const buyAsset = jest.fn();

const app = makeApp({ buyAsset });

describe('POST /investments/buy', () => {
  beforeEach(() => {
    buyAsset.mockReset();
    buyAsset.mockResolvedValue(0 as never);
  });
  describe('Check Investments Model POST: insert asset as "amount_asset_take" on database with function buyAsset', () => {
    it('should insert an object on database, object that contains the keys customerId, assetId, quantity', async () => {
      const bodyData = {
        customerId: 1,
        assetId: 1,
        quantity: 10,
      };
      const response = await request(app).post('/investments/buy').send(bodyData);
      console.log(response);
      // expect(buyAsset.mock.calls.length).toBe(1);
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      expect(response.statusCode).toBe(201);
      // expect(response.body.customerId).toBe(1)
      // expect(buyAsset.mock.calls[0][0]).toBe(bodyData.customerId);
      // expect(buyAsset.mock.calls[0][1]).toBe(bodyData.assetId);
      // expect(buyAsset.mock.calls[0][2]).toBe(bodyData.quantity);
    });
  });
})

/* describe('Check Investments Model POST: insert asset as "amount_asset_take" on database with function buyAsset', () => {
  it('should insert an object on database, object that contains the keys customerId, assetId, quantity', async () => {
    const mock = jest.spyOn(Connection, 'execute');
    // const result = mock.
    const result = await InvestmentsModel.buyAsset(tradeAsset);
    expect(mock).toHaveBeenCalled();
  });
});

describe('Check Investments Model POST: insert asset as "amount_asset_sell" on database with function sellAsset', () => {
  it('should insert an object on database, object that contains the keys customerId, assetId, quantity', async () => {
    jest.spyOn(Connection, 'execute').mockResolvedValue(tradeAsset as any);
    const result = await InvestmentsModel.sellAsset(tradeAsset);
    expect(result).toHaveBeenCalled();
  });
});

describe('Check Investments Model UPDATE: update data on table Customer_Custody with function updateAmountAssetAtBrokerageFirm', () => {
  it('should updated data as match with asset_id', async () => {
    jest.spyOn(Connection, 'execute').mockRestore
    const result = await InvestmentsModel.updateAmountAssetAtBrokerageFirm(10,1);
    expect(result).toHaveBeenCalled();
  });
}); */