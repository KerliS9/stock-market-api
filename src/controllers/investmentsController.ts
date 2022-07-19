import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import InvestmentsService from '../services/investmentsService';

export default {
  buyAsset: async (req: Request, res: Response): Promise<Response> => {
    const result = await InvestmentsService.buyAsset(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  },

  sellAsset: async (req: Request, res: Response): Promise<Response> => {
    const result = await InvestmentsService.sellAsset(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  },
};
