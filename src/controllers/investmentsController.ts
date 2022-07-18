import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import InvestmentsService from '../services/investmentsService';

export default {
  takeAsset: async (req: Request, res: Response): Promise<Response> => {
    const result = await InvestmentsService.takeAsset(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  },
};
