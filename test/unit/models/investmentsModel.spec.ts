import Connection from '../../../src/models/connection';
import InvestmentsModel from '../../../src/models/investmentsModel';
import tradeAsset from '../../__mocks__/investments';

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