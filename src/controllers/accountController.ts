import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AccountService from '../services/accountService';

export default {
  getAllCustomers: async (_req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getAllCustomers();
    return res.status(StatusCodes.OK).json(result);
  },

  getAssetByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getAssetByCustomerId(+req.params.id);
    return res.status(StatusCodes.OK).json(result);
  },

  getCustomerById: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getCustomerById(+req.params.id);
    if (result[0].message) {
      return res.status(StatusCodes.NOT_FOUND).json(result[0]);
    }
    return res.status(StatusCodes.OK).json(result[0]);
  },

  getAccountStatementByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getAccountStatementByCustomerId(+req.params.id);
    return res.status(StatusCodes.OK).json(result);
  },

  insertDepositAtAccountByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.insertDepositAtAccountByCustomerId(req.body);
    if (result.message) {
      return res.status(StatusCodes.CONFLICT).json(result);
    }
    return res.status(StatusCodes.CREATED).json(result);
  },

  insertWithdrawAtAccountByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.insertWithdrawAtAccountByCustomerId(req.body);
    if (result.message) {
      return res.status(StatusCodes.CONFLICT).json(result);
    }
    return res.status(StatusCodes.CREATED).json(result);
  },
};
