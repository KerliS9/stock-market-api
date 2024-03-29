import { Router } from 'express';
import AssetController from '../controllers/assetController';

const AssetRoutes = Router();

AssetRoutes.get('/assets/:id', AssetController.getAssetById);
AssetRoutes.get('/assets', AssetController.getAllAssets);

export default AssetRoutes;
