import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AssetService from '../services/assetService';

export default {
  getAllAssets: async (_req: Request, res: Response): Promise<Response> => {
    const result = await AssetService.getAllAssets();
    return res.status(StatusCodes.OK).json(result);
  },

  getAssetById: async (req: Request, res: Response): Promise<Response> => {
    const result = await AssetService.getAssetById(+req.params.id);
    if (result[0].message) {
      return res.status(StatusCodes.NOT_FOUND).json(result[0]);
    }
    return res.status(StatusCodes.OK).json(result[0]);
  },
};
