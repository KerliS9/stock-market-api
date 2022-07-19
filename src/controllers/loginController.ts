import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/loginService';

export default {
  getCustomerLogin: async (req: Request, res: Response): Promise<Response> => {
    const result = await LoginService.getCustomerLogin(req.body);
    return res.status(StatusCodes.ACCEPTED).json(result);
  },
};
