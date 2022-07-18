import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AccountService from '../services/accountService';

export default {
  getAll: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getAll();
    return res.status(StatusCodes.OK).json(result);
  },

  getCustomerById: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getCustomerById(+req.params.id);
    return res.status(StatusCodes.OK).json(result);
  },

  getAccountStatementCustomerById: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getAccountStatementCustomerById(+req.params.id);
    return res.status(StatusCodes.OK).json(result);
  },
};
