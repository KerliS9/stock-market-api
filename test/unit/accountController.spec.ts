import { getMockReq, getMockRes } from '@jest-mock/express';
import AccountService from '../../src/services/accountService';
import AccountController from '../../src/controllers/accountController';
import { investmentsByCustomerId, customerById, messageCustomerById,
  depositByCustomerId, messageInputValue, withdrawByCustomerId, messageOutputValue
} from '../__mocks__/account';

describe('Check Account Controller GET: getAssetByCustomerId', () => {
  it('should return an array of objects', async () => {
    const req = getMockReq({
      params: {
        id: '1'
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'getAssetByCustomerId').mockResolvedValue(investmentsByCustomerId);
    await AccountController.getAssetByCustomerId(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.arrayContaining(investmentsByCustomerId));
  });
});

describe('Check Account Controller GET: getCustomerById', () => {
  it('should return an object', async () => {
    const req = getMockReq({
      params: {
        id: '1'
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'getCustomerById').mockResolvedValue(customerById);
    await AccountController.getCustomerById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(customerById[0]));
  });

  it('when there are error on data informed from customer', async () => {
    const req = getMockReq({
      params: {
        id: '10'
      } });

    const { res } = getMockRes();

    jest.spyOn(AccountService, 'getCustomerById').mockResolvedValue(messageCustomerById);
    await AccountController.getCustomerById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(messageCustomerById[0]));
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