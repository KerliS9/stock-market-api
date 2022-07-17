import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AssetService from '../services/assetService';

export default {
  getAll: async (req: Request, res: Response) => {
    const result = await AssetService.getAll();
    return res.status(StatusCodes.OK).json(result);
  },

  getAssetById: async (req: Request, res: Response) => {
    const result = await AssetService.getAssetById(+req.params.id);
    return res.status(StatusCodes.OK).json(result);
  },
};
