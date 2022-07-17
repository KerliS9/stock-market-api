import { Router } from 'express';
import AssetController from '../controllers/assetController';

const AssetRoutes = Router();

AssetRoutes.use('/assets/:id', AssetController.getAssetById);
AssetRoutes.use('/assets', AssetController.getAll);

export default AssetRoutes;
