import { Router } from 'express';
import AssetRoutes from './assetRoutes';
import AccountRoutes from './accountRoutes';

const routes = Router();

routes.use(AssetRoutes);
routes.use(AccountRoutes);

export default routes;
