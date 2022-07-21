import Connection from '../../../src/models/connection';
import InvestmentsModel from '../../../src/models/investmentsModel';
import InvestmentsService from '../../../src/services/investmentsService';
import { tradeAsset, sellAssetResultSetHeader } from '../../__mocks__/investments';

/* describe('Check Investments Service POST: check amount of asset available on broker, buy asset, update amount of asset on broker and insert withdraw to account statement', () => {
    it('should return an array of objects that contains the keys customerId, assetId, quantity, totalPurchase', async () => {
    jest.spyOn(InvestmentsModel, 'buyAsset').mockResolvedValue(1);
    const response = await InvestmentsService.buyAsset(tradeAsset);
    expect(response).toHaveBeenCalled();
    // expect(response).to.include.all.keys('customerId', 'assetId', 'quantity', 'totalPurchase');
  });
}); */

describe(`Check Investments Service POST: check amount of asset on customer custody, sell asset, 
update amount of asset on broker and insert deposit to account statement`, () => {
  it('should return an array of objects that contains the keys customerId, assetId, quantity, totalSale', async () => {
    jest.spyOn(InvestmentsModel, 'buyAsset').mockResolvedValue(sellAssetResultSetHeader as any);
    const response = await InvestmentsService.sellAsset(tradeAsset);
    expect(response).toHaveBeenCalled();
    // expect(response).to.include.all.keys('customerId', 'assetId', 'quantity', 'totalSale');
  });
});
