import AccountModel from '../../../src/models/accountModel';
import AccountService from '../../../src/services/accountService';
import { customers, accountBalance, customerById,
  customerByIdAccountStatement,
  depositByCustomerId, depositByCustomerIdWithoutValue,
  withdrawByCustomerId, withdrawByCustomerIdWithoutValue,
} from '../../__mocks__/account';

describe('Check Account Service GET: getAllCustomers assets from database', () => {    
    it('should return an array of objects that contains the keys customerId, fullName, investorProfile', async () => {
    jest.spyOn(AccountModel, 'getAllCustomers').mockResolvedValue(customers);
    const response = await AccountService.getAllCustomers();
    expect(response).toEqual(expect.arrayContaining(customers));
    expect(response[0]).toHaveProperty('customerId');
    expect(response[0]).toHaveProperty('fullName');
    expect(response[0]).toHaveProperty('investorProfile');
  });
});

/* describe('Check Account Service GET: getAllCustomers assets from database', () => {    
  it('should return an array of objects that contains the keys customerId, fullName, investorProfile', async () => {
    jest.spyOn(AccountModel, 'getAllCustomers').mockResolvedValue(customers);
    const response = await AccountService.getAllCustomers();
    expect(response).toEqual(expect.arrayContaining(customers));
    expect(response[0]).toHaveProperty('customerId');
    expect(response[0]).toHaveProperty('fullName');
    expect(response[0]).toHaveProperty('investorProfile');
  });
}); */

describe('Check Account Service GET: getCustomerById from database', () => {
  it(`when customer exits on database - should return an object that contains the keys 
  customerId, fullName, investorProfile, accountBalance`, async () => {
    jest.spyOn(AccountModel, 'getCustomerAccountBalance').mockResolvedValue(accountBalance);
    jest.spyOn(AccountModel, 'updateAccountBalanceByCustomerId').mockResolvedValue(undefined);
    jest.spyOn(AccountModel, 'getCustomerById').mockResolvedValue(customerById);
    const [response] = await AccountService.getCustomerById(1);
    expect(response).toHaveProperty('customerId');
    expect(response).toHaveProperty('fullName');
    expect(response).toHaveProperty('investorProfile');
    expect(response).toHaveProperty('accountBalance');
  });
  it('when don\t exists this customerId on database', async () => {
    jest.spyOn(AccountModel, 'getCustomerById').mockResolvedValue([]);
    const [response] = await AccountService.getCustomerById(10);
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Sorry, this customer still doesn\t have an account with us');
  })
});

describe('Check Account Service GET: getAccountStatementByCustomerId from database', () => {    
  it('should return an array of objects that contains the keys date, accountInput, accountOutput', async () => {
    jest.spyOn(AccountModel, 'getAccountStatementByCustomerId').mockResolvedValue(customerByIdAccountStatement);
    const response = await AccountService.getAccountStatementByCustomerId(1);
    expect(response).toEqual(expect.arrayContaining(customerByIdAccountStatement));
    expect(response[0]).toHaveProperty('date');
    expect(response[0]).toHaveProperty('accountInput');
    expect(response[0]).toHaveProperty('accountOutput');
  });
});

describe('Check Account Service GET: insertDepositAtAccountByCustomerId at database', () => {    
  it('should return an objects that contains the keys customerId, inputValue', async () => {
    jest.spyOn(AccountModel, 'insertDepositAtAccountByCustomerId').mockResolvedValue(undefined);
    const response = await AccountService.insertDepositAtAccountByCustomerId(depositByCustomerId);
    expect(response).toEqual(expect.objectContaining(depositByCustomerId));
    expect(response).toHaveProperty('customerId');
    expect(response).toHaveProperty('inputValue');
  });
  it('when value to deposit is lower than 1', async () => {
    jest.spyOn(AccountModel, 'insertDepositAtAccountByCustomerId').mockResolvedValue(undefined);
    const response = await AccountService.insertDepositAtAccountByCustomerId(depositByCustomerIdWithoutValue);
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Sorry, value to pay into an account need to be greater than 0');
  })
});

describe('Check Account Service GET: insertWithdrawAtAccountByCustomerId at database', () => {    
  it('should return an objects that contains the keys customerId, outputValue', async () => {
    jest.spyOn(AccountModel, 'insertWithdrawAtAccountByCustomerId').mockResolvedValue(undefined);
    jest.spyOn(AccountModel, 'getCustomerAccountBalance').mockResolvedValue(accountBalance);
    const response = await AccountService.insertWithdrawAtAccountByCustomerId(withdrawByCustomerId);
    expect(response).toEqual(expect.objectContaining(withdrawByCustomerId));
    expect(response).toHaveProperty('customerId');
    expect(response).toHaveProperty('outputValue');
  });

  it('when value to deposit is lower than 1', async () => {
    jest.spyOn(AccountModel, 'insertWithdrawAtAccountByCustomerId').mockResolvedValue(undefined);
    const response = await AccountService.insertWithdrawAtAccountByCustomerId(withdrawByCustomerIdWithoutValue);
    expect(response).toHaveProperty('message');
    expect(response.message).toBe('Sorry, value to withdraw from account need to be greater than 0');
  });
});
