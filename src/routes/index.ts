import { Router } from 'express';
import AssetRoutes from './assetRoutes';

const routes = Router();

routes.use(AssetRoutes);

export default routes;
