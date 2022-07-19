import { Router } from 'express';
import InvestmentsController from '../controllers/investmentsController';

const InvestmentsRoutes = Router();

InvestmentsRoutes.post('/investments/buy', InvestmentsController.buyAsset);
InvestmentsRoutes.post('/investments/sell', InvestmentsController.sellAsset);

export default InvestmentsRoutes;
