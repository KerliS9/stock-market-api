import { Router } from 'express';
import AccountController from '../controllers/accountController';
import auth from '../middleware/authMiddleware';

const AccountRoutes = Router();

AccountRoutes.use(auth.authentication);
AccountRoutes.get('/account/assets/:id', AccountController.getAssetByCustomerId);
AccountRoutes.get('/account/statement/:id', AccountController.getAccountStatementByCustomerId);
AccountRoutes.get('/account/:id', AccountController.getCustomerById);
AccountRoutes.get('/account', AccountController.getAllCustomers);

AccountRoutes.post('/account/input', AccountController.insertDepositAtAccountByCustomerId);
AccountRoutes.post('/account/output', AccountController.insertWithdrawAtAccountByCustomerId);

export default AccountRoutes;
