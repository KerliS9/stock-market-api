import { Router } from 'express';
import AccountController from '../controllers/accountController';

const AccountRoutes = Router();

AccountRoutes.use('/account', AccountController.getAll);

export default AccountRoutes;
