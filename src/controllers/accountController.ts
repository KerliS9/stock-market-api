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

  getAccountStatementByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    const result = await AccountService.getAccountStatementByCustomerId(+req.params.id);
    return res.status(StatusCodes.OK).json(result);
  },

  /* setValueOnAccountByCustomerId: async (req: Request, res: Response): Promise<Response> => {
    console.log('controllers', req.body);
    const result = await AccountService.setValueOnAccountByCustomerId(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  }, */
};
