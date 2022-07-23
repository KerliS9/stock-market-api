import AssetModel from '../../src/models/assetModel';
import AccountModel from '../../src/models/accountModel';
import InvestmentsModel from '../../src/models/investmentsModel';
import AccountService from '../../src/services/accountService';
import InvestmentsService from '../../src/services/investmentsService';
import { buyAsset, sellAsset, assetById, investmentsByCustomerId,
  customerById, customerByIdProfileOK,
} from '../__mocks__/investments';

describe(`Check Investments Service POST: check amount of asset available on broker, buy asset, 
update amount of asset on broker and insert withdraw to account statement`, () => {
  it('should return an array of objects that contains the keys customerId, assetId, quantity, totalPurchase', async () => {
    jest.spyOn(AccountModel, 'getCustomerById').mockResolvedValue(customerByIdProfileOK);
    jest.spyOn(AssetModel, 'getAssetById').mockResolvedValue(assetById);
    jest.spyOn(InvestmentsModel, 'buyAsset').mockResolvedValue(undefined);
    jest.spyOn(InvestmentsModel, 'updateAmountAssetAtBrokerageFirm').mockResolvedValue(undefined);
    jest.spyOn(AccountModel, 'insertWithdrawAtAccountByCustomerId').mockResolvedValue(undefined);
    const response = await InvestmentsService.buyAsset(buyAsset);
    expect(response).toEqual(expect.objectContaining(buyAsset));
    expect(response).toHaveProperty('customerId');
    expect(response).toHaveProperty('assetId');
    expect(response).toHaveProperty('quantity');
    expect(response).toHaveProperty('totalPurchase');
  });

  it('when profile risk does nots match to daring profile, should return an object that contains the keys message', async () => {
    jest.spyOn(AccountModel, 'getCustomerById').mockResolvedValue(customerById);
    const response = await InvestmentsService.buyAsset(buyAsset);
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Sorry, this operation is not available to your investor profile');
  });
});

describe(`Check Investments Service POST: check amount of asset on customer custody, sell asset, 
update amount of asset on broker and insert deposit to account statement`, () => {
  it('should return an array of objects that contains the keys customerId, assetId, quantity, totalSale', async () => {
    jest.spyOn(AccountService, 'getAssetByCustomerId').mockResolvedValue(investmentsByCustomerId);
    jest.spyOn(InvestmentsModel, 'sellAsset').mockResolvedValue(undefined);
    jest.spyOn(InvestmentsModel, 'updateAmountAssetAtBrokerageFirm').mockResolvedValue(undefined);
    jest.spyOn(AccountModel, 'insertDepositAtAccountByCustomerId').mockResolvedValue(undefined);
    const response = await InvestmentsService.sellAsset(sellAsset);
    expect(response).toEqual(expect.objectContaining(sellAsset));
    expect(response).toHaveProperty('customerId');
    expect(response).toHaveProperty('assetId');
    expect(response).toHaveProperty('quantity');
    expect(response).toHaveProperty('totalSale');
  });
});
