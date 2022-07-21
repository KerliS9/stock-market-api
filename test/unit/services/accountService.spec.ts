import AccountModel from '../../../src/models/accountModel';
import AccountService from '../../../src/services/accountService';
import { customers, accountBalance, customerById,
  ResultSetHeaderMock } from '../../__mocks__/account';

describe('Check Asset Service GET: getAllCustomers assets from database', () => {    
    it('should return an array of objects that contains the keys customerId, fullName, investorProfile', async () => {
    jest.spyOn(AccountModel, 'getAllCustomers').mockResolvedValue(customers);
    const response = await AccountService.getAllCustomers();
    expect(response).toEqual(expect.arrayContaining(customers));
    expect(response[0]).toHaveProperty('customerId');
    expect(response[0]).toHaveProperty('fullName');
    expect(response[0]).toHaveProperty('investorProfile');
  });
});

describe('Check Account Service GET: getCustomerById from database', () => {
  it(`when customer exits on database - should return an object that contains the keys 
  customerId, fullName, investorProfile, accountBalance`, async () => {
    jest.spyOn(AccountModel, 'getCustomerAccountBalance').mockResolvedValue(accountBalance);
    jest.spyOn(AccountModel, 'updateAccountBalanceByCustomerId').mockResolvedValue(ResultSetHeaderMock as any);
    jest.spyOn(AccountModel, 'getCustomerById').mockResolvedValue(customerById);
    const [response] = await AccountService.getCustomerById(1);
    // console.log('getCustomerById', [response]);
    expect(response).toHaveProperty('customerId');
    expect(response).toHaveProperty('fullName');
    expect(response).toHaveProperty('investorProfile');
    expect(response).toHaveProperty('accountBalance');
  });
  it('when don\t exists this customerId on database', async () => {
    jest.spyOn(AccountModel, 'getCustomerById').mockResolvedValue([]);
    const [response] = await AccountService.getCustomerById(10);
    console.log('getCustomerById', response);
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Sorry, this customer still doesn\t have an account with us');
  })
});
