import { Router } from 'express';
import controller from '../controller/products.controller';

const router = Router();

router.get('/', controller.getAll);
router.post('/', controller.addProduct);

export default router;
