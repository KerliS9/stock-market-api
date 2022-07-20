// import sinon from 'sinon';
import { expect } from 'chai';
// import Connection from '../../../src/models/connection';
import AssetModel from '../../../src/models/assetModel';
// import assets from '../../__mocks__/assets/assets';

describe('Check Assets Models GET: get all assets from database', () => {
  describe('when there are assets in the database', () => {
    /* before(() => {
      sinon.stub(Connection, 'execute').resolves(assets);
    });
    after(() => {
      Connection.execute.restore();
    }); */
  });
  it('should return an array of objects that contains the keys id, asset, price, sector, company', async () => {
    const response = await AssetModel.getAll();
    expect(response).to.be.an('array');
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.include.all.keys('id', 'asset', 'price', 'sector', 'company');
  });
});
