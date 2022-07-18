import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import InvestmentsService from '../services/investmentsService';

export default {
  takeStock: async (req: Request, res: Response): Promise<Response> => {
    const result = await InvestmentsService.takeStock(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  },
};
