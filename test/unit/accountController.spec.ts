import { getMockReq, getMockRes } from '@jest-mock/express';
import AccountService from '../../src/services/accountService';
import AccountController from '../../src/controllers/accountController';
import { messageCustomerById, customers,
  depositByCustomerId, messageInputValue, withdrawByCustomerId, messageOutputValue,
} from '../__mocks__/account';

describe('Check Account Controller GET: getAllCustomers', () => {
  it('should return an array of objects', async () => {
    const req = getMockReq();

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'getAllCustomers').mockResolvedValue(customers);
    await AccountController.getAllCustomers(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.arrayContaining(customers));
  });
});

describe('Check Account Controller GET: getAssetByCustomerId', () => {
  it('when customer doesn\t have access to the requested information', async () => {
    const req = getMockReq({
      params: {
        id: '10',
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'getAssetByCustomerId').mockResolvedValue([]);
    await AccountController.getAssetByCustomerId(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith(messageCustomerById);
  });
});

describe('Check Account Controller GET: getCustomerById', () => {
  it('when customer doesn\t have access to the requested information', async () => {
    const req = getMockReq({
      params: {
        id: '10',
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'getCustomerById').mockResolvedValue([]);
    await AccountController.getCustomerById(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith(messageCustomerById);
  });
});

describe('Check Account Controller GET: getAccountStatementByCustomerId', () => {
  it('when customer doesn\t have access to the requested information', async () => {
    const req = getMockReq({
      params: {
        id: '10',
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'getAccountStatementByCustomerId').mockResolvedValue([]);
    await AccountController.getAccountStatementByCustomerId(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith(messageCustomerById);
  });
});

describe('Check Account Controller POST: insertDepositAtAccountByCustomerId', () => {
  it('should return an object', async () => {
    const req = getMockReq({
      body: {
        customerId: 1,
        inputValue: 20,
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'insertDepositAtAccountByCustomerId').mockResolvedValue(depositByCustomerId);
    await AccountController.insertDepositAtAccountByCustomerId(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(depositByCustomerId));
  });

  it('when there are error on data informed from customer', async () => {
    const req = getMockReq({
      body: {
        customerId: 1,
        inputValue: 0,
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'insertDepositAtAccountByCustomerId').mockResolvedValue(messageInputValue);
    await AccountController.insertDepositAtAccountByCustomerId(req, res);
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(messageInputValue));
  });
});

describe('Check Account Controller POST: insertWithdrawAtAccountByCustomerId', () => {
  it('should return an object', async () => {
    const req = getMockReq({
      body: {
        customerId: 1,
        outputValue: 20,
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'insertWithdrawAtAccountByCustomerId').mockResolvedValue(withdrawByCustomerId);
    await AccountController.insertWithdrawAtAccountByCustomerId(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(withdrawByCustomerId));
  });

  it('when there are error on data informed from customer', async () => {
    const req = getMockReq({
      body: {
        customerId: 1,
        outputValue: 0,
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'insertWithdrawAtAccountByCustomerId').mockResolvedValue(messageOutputValue);
    await AccountController.insertWithdrawAtAccountByCustomerId(req, res);
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(messageOutputValue));
  });
});
