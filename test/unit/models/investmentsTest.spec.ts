import { stub, SinonStub } from 'sinon';
import { expect } from 'chai';
import Connection from '../../../src/models/connection';
import InvestmentsModel from '../../../src/models/investmentsModel';
import InvestmentsService from '../../../src/services/investmentsService';
import tradeAsset from '../../__mocks__/investments';

// model
describe('Check Investments Model POST: insert asset as "amount_asset_take" on database with function buyAsset', () => {
  describe('when asset is insert successfully', () => {
    let processExitStub: SinonStub;
    beforeEach(() => {
      processExitStub = stub(Connection, 'execute').resolves();
    });
    afterEach(() => {
      processExitStub.restore();
    });
  });
  it('should insert an object on database, object that contains the keys customerId, assetId, quantity', async () => {
    await InvestmentsModel.buyAsset(tradeAsset);
  });
});

describe('Check Investments Model POST: insert asset as "amount_asset_sell" on database with function sellAsset', () => {
  describe('when asset is insert successfully', () => {
    let processExitStub: SinonStub;
    beforeEach(() => {
      processExitStub = stub(Connection, 'execute').resolves();
    });
    afterEach(() => {
      processExitStub.restore();
    });
  });
  it('should insert an object on database, object that contains the keys customerId, assetId, quantity', async () => {
    await InvestmentsModel.sellAsset(tradeAsset);
  });
});

describe('Check Investments Model UPDATE: update data on table Customer_Custody with function updateAmountAssetAtBrokerageFirm', () => {
  describe('when assets is updated successfully', () => {
    let processExitStub: SinonStub;
    beforeEach(() => {
      processExitStub = stub(Connection, 'execute').resolves();
    });
    afterEach(() => {
      processExitStub.restore();
    });
  });
  it('should updated data as match with asset_id', async () => {
    await InvestmentsModel.updateAmountAssetAtBrokerageFirm(10,1);
  });
});
// service
describe('Check Investments Service POST: check amount of asset available on broker, buy asset, update amount of asset on broker and insert withdraw to account statement', () => {
  describe('when action of customer ends successfully', () => {
  // simular funções (mock)
  });
  it('should return an array of objects that contains the keys customerId, assetId, quantity, totalPurchase', async () => {
    const response = await InvestmentsService.buyAsset(tradeAsset);
    expect(response).to.be.an('object');
    expect(response).to.include.all.keys('customerId', 'assetId', 'quantity', 'totalPurchase');
  });
});

describe(`Check Investments Service POST: check amount of asset on customer custody, sell asset, 
update amount of asset on broker and insert deposit to account statement`, () => {
  describe('when action of customer ends successfully', () => {
  // simular funções (mock)
  });
  it('should return an array of objects that contains the keys customerId, assetId, quantity, totalSale', async () => {
    const response = await InvestmentsService.sellAsset(tradeAsset);
    expect(response).to.be.an('object');
    expect(response).to.include.all.keys('customerId', 'assetId', 'quantity', 'totalSale');
  });
});
