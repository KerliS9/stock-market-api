import sinon, { stub, SinonStub } from 'sinon';
import { expect } from 'chai';
import Connection from '../../../src/models/connection';
import AssetModel from '../../../src/models/assetModel';
import AssetService from '../../../src/services/assetService';
import assets from '../../__mocks__/assets';
import { IAsset, IAssetByAssetId } from '../../__mocks__/interfaces/assets';

describe('Check Asset Model GET: getAll assets from database', () => {
  describe('when there are assets in the database', () => {
    let processExitStub: SinonStub;
    beforeEach(() => {
      processExitStub = stub(Connection, 'execute').resolves();
    });
    afterEach(() => {
      processExitStub.restore();
    });
  });
  it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    const response = await AssetModel.getAllAssets();
    expect(response).to.be.an('array');
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.include.all.keys('id', 'asset', 'price', 'sector', 'company');
  });
});

describe('Check Asset Model GET: getAssetById from database', () => {
  /* describe('when there is an asset in the database', () => {
    beforeEach(() => {
      return sinon.stub(Connection, 'execute').resolves(assets[0]);
    });
    afterEach(() => {
      Connection.execute.restore();
    });
  }); */
  it('should return an array of one object that contains the keys assetId, asset, price, broker, amountAsset', async () => {
    const response = await AssetModel.getAssetById(1);
    expect(response).to.have.lengthOf(1);
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.include.all.keys('assetId', 'asset', 'price', 'broker', 'amountAsset');
  });
});

describe('Check Asset Service GET: getAllAssets assets from database', () => {
  describe('when there are assets in the database', () => {
  let processExitStub: SinonStub;
    beforeEach(() => {
      processExitStub = stub(AssetModel, 'getAllAssets').resolves(assets as unknown as IAsset[]);
    });
    afterEach(() => {
      sinon.restore();
      processExitStub.resetHistory();
    });
  });
  it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    const response = await AssetService.getAllAssets();
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
});
