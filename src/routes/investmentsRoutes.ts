import { Router } from 'express';
import InvestmentsController from '../controllers/investmentsController';

const InvestmentsRoutes = Router();

InvestmentsRoutes.post('/investments/buy', InvestmentsController.takeAsset);

export default InvestmentsRoutes;
