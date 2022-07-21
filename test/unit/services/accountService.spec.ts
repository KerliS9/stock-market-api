import { RowDataPacket } from 'mysql2';
import AccountModel from '../../../src/models/accountModel';
import AccountService from '../../../src/services/accountService';
import { customers, customerById, customerByIdSaved, AccountStatement } from '../../__mocks__/account';

/* describe('Check Asset Service GET: getAllAssets assets from database', () => {    
    it('should return an array of objects that contains the keys customerId, fullName, investorProfile', async () => {
    jest.spyOn(AccountModel, 'getAllCustomers').mockResolvedValue(customers);
    const response = await AccountService.getAllCustomers();
    expect(response).toEqual(expect.arrayContaining(customers));
    expect(response[0]).toHaveProperty('id');
    expect(response[0]).toHaveProperty('asset');
    expect(response[0]).toHaveProperty('price');
    expect(response[0]).toHaveProperty('sector');
    expect(response[0]).toHaveProperty('company');
  });
}); */

describe('Check Account Service GET: getCustomerById from database', () => {
  it('should return an object that contains the keys customerId, fullName, investorProfile, accountBalance', async () => {
    console.log('antes', await AccountModel.getCustomerById(1));
    const mockFn = jest.fn(AccountModel.getCustomerById);
    jest.fn(AccountModel.getCustomerAccountBalance);
    // jest.spyOn(AccountModel, 'getCustomerById').mockResolvedValue(customerByIdSaved as any);
    jest.spyOn(AccountModel, 'getCustomerAccountBalance').mockResolvedValue(AccountStatement as any);
    const response = await AccountService.getCustomerById(mockFn as any);
    console.log('getCustomerById', response);
    expect(response).toHaveProperty('customerId');
    expect(response).toHaveProperty('fullName');
    expect(response).toHaveProperty('investorProfile');
    expect(response).toHaveProperty('accountBalance');
  });
});
