const { stub, SinonStub } = require('sinon');
const { expect } = require('chai');
const Connection = require('../../../src/models/connection');
const AssetModel = require('../../../src/models/assetModel');
const assets = require('../../__mocks__/assets/assets');

describe('Check Asset Model GET: getAll assets from database', () => {
  describe('when there are assets in the database', () => {
    beforeEach(() => {
      return stub(Connection, 'execute').resolves(assets);
    });
    afterEach(() => {
      Connection.execute.restore();
    });
  });
  it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    const response = await AssetModel.getAll();
    expect(response).to.be.an('array');
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.include.all.keys('id', 'asset', 'price', 'sector', 'company');
  });
});

describe('Check Asset Model GET: getAssetById from database', () => {
  describe('when there is an asset in the database', () => {
    beforeEach(() => {
      return sinon.stub(Connection, 'execute').resolves(assets[0]);
    });
    afterEach(() => {
      Connection.execute.restore();
    });
  });
  it('should return an array of one object that contains the keys assetId, asset, price, broker, amountAsset', async () => {
    const response = await AssetModel.getAssetById(1);
    expect(response).to.have.lengthOf(1);
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.include.all.keys('assetId', 'asset', 'price', 'broker', 'amountAsset');
  });
});
