import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AccountService from '../services/accountService';

export default {
  getAll: async (req: Request, res: Response) => {
    const result = await AccountService.getAll();
    return res.status(StatusCodes.OK).json(result);
  },
};
