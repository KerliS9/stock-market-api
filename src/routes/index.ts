import { Router } from 'express';
import AssetRoutes from './assetRoutes';
import AccountRoutes from './accountRoutes';
import InvestmentsRoutes from './investmentsRoutes';
import LoginRoute from './loginRoute';

const routes = Router();

routes.use(LoginRoute);
routes.use(AssetRoutes);
routes.use(AccountRoutes);
routes.use(InvestmentsRoutes);

export default routes;
