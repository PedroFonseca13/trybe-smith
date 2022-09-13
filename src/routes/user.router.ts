import { Router } from 'express';
import controller from '../controller/user.controller';
import userMiddleware from '../middleware/user.middleware';

const router = Router();

router.post('/', controller.addUser);
router.post(
  '/',
  userMiddleware.validateUsername,
  userMiddleware.validateClasse,
  userMiddleware.validateUserLevel,
  userMiddleware.validateUserPassword,
  controller.addUser,
);

export default router;
