import { Router } from 'express';
import LoginController from '../controllers/loginController';

const LoginRoute = Router();

LoginRoute.post('/login', LoginController.getCustomerLogin);

export default LoginRoute;
