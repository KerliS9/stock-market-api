import { Router } from 'express';
import AssetRoutes from './assetRoutes';
import AccountRoutes from './accountRoutes';
import InvestmentsRoutes from './investmentsRoutes';

const routes = Router();

routes.use(AssetRoutes);
routes.use(AccountRoutes);
routes.use(InvestmentsRoutes);

export default routes;
