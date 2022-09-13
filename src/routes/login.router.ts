import { Router } from 'express';
import userController from '../controller/user.controller';
import loginMiddleware from '../middleware/login.middleware';

const router = Router();

router.post(
  '/',
  loginMiddleware.validateUsername,
  loginMiddleware.validateUserPassword,
  loginMiddleware.verifyUserNameAndPassword,
  userController.login,
);

export default router;
