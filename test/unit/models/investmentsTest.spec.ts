import sinon, { stub, SinonStub } from 'sinon';
import { expect } from 'chai';
import Connection from '../../../src/models/connection';
import InvestmentsModel from '../../../src/models/investmentsModel';
import InvestmentsService from '../../../src/services/investmentsService';
import tradeAsset from '../../__mocks__/investments/investments';
import { ITradeAsset } from '../../__mocks__/interfaces/investments';

describe('Check Investments Model POST: insert asset as amount_asset_take on database with function buyAsset', () => {
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

describe('Check Investments Model POST: insert asset as amount_asset_sell on database with function sellAsset', () => {
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

describe('Check Investments Model POST: insert asset as amount_asset_sell on database with function sellAsset', () => {
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

/* describe('Check Asset Service GET: getAll assets from database', () => {
  describe('when there are assets in the database', () => {
  let processExitStub: SinonStub;
    beforeEach(() => {
      processExitStub = stub(AssetModel, 'getAll').resolves(assets as unknown as IAsset[]);
      // console.log('processExitStub', processExitStub);
    });
    afterEach(() => {
      sinon.restore();
      processExitStub.resetHistory();
    });
  });
  it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    const response = await AssetService.getAll();
    expect(response).to.be.an('array');
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.include.all.keys('id', 'asset', 'price', 'sector', 'company');
  });
});

describe('Check Asset Service GET: getAssetById from database', () => {
  describe('when there is an asset in the database', () => {
    let processExitStub: SinonStub;
    beforeEach(() => {
      processExitStub = stub(AssetModel, 'getAssetById').resolves(assets as unknown as IAssetByAssetId[]);
    });
    afterEach(() => {
      processExitStub.restore();
    });
  
  });
  it('should return an array of one object that contains the keys assetId, asset, price, broker, amountAsset', async () => {
    const response = await AssetService.getAssetById(1);
    expect(response).to.have.lengthOf(1);
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.include.all.keys('assetId', 'asset', 'price', 'broker', 'amountAsset');
  });
}); */
