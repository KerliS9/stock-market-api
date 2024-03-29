import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AccountService from '../services/accountService';

export default {
  getAllCustomers: async (_req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getAllCustomers();
    return res.status(StatusCodes.OK).json(result);
  },

  getAssetByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    // const { id } = res.locals; console
    if (res.locals.id !== +req.params.id) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Sorry, your are not authorized to get this information' });
    }
    const result = await AccountService.getAssetByCustomerId(+req.params.id);
    return res.status(StatusCodes.OK).json(result);
  },

  getCustomerById: async (req: Request, res: Response): Promise<Response> => {
    const { id } = res.locals;
    if (id !== +req.params.id) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Sorry, your are not authorized to get this information' });
    }
    const result = await AccountService.getCustomerById(+req.params.id);
    return res.status(StatusCodes.OK).json(result[0]);
  },

  getAccountStatementByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    if (res.locals.id !== +req.params.id) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Sorry, your are not authorized to get this information' });
    }
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
