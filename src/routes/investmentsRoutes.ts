import { Router } from 'express';
import InvestmentsController from '../controllers/investmentsController';
import auth from '../middleware/authMiddleware';

const InvestmentsRoutes = Router();

InvestmentsRoutes.use(auth.authentication);
InvestmentsRoutes.post('/investments/buy', InvestmentsController.buyAsset);
InvestmentsRoutes.post('/investments/sell', InvestmentsController.sellAsset);

export default InvestmentsRoutes;
