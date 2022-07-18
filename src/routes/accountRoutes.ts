import { Router } from 'express';
import AccountController from '../controllers/accountController';

const AccountRoutes = Router();

AccountRoutes.get('/account/statement/:id', AccountController.getAccountStatementByCustomerId);
AccountRoutes.get('/account/:id', AccountController.getCustomerById);
AccountRoutes.get('/account', AccountController.getAll);

AccountRoutes.post('/account/input', AccountController.setValueOnAccountByCustomerId);
AccountRoutes.post('/account/output', AccountController.withdrawValueFromAccountByCustomerId);

export default AccountRoutes;