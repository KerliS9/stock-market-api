import { Router } from 'express';
import AssetController from '../controllers/assetController';

const AssetRoutes = Router();

AssetRoutes.use('/assets/customer/:id', AssetController.getAssetByCustomerId);
AssetRoutes.use('/assets/asset/:id', AssetController.getAssetById);
AssetRoutes.use('/assets', AssetController.getAll);

export default AssetRoutes;
