import { Router } from 'express';
import controller from '../controller/user.controller';

const router = Router();

router.post('/', controller.addUser);

export default router;
