import { Router } from 'express';
import AssetController from '../controllers/assetController';

const AssetRoutes = Router();

AssetRoutes.get('/assets/customer/:id', AssetController.getAssetByCustomerId); // colocar no arquivo de Accounts
AssetRoutes.get('/assets/asset/:id', AssetController.getAssetById);
AssetRoutes.get('/assets', AssetController.getAll);

export default AssetRoutes;
