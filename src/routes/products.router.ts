import { Router } from 'express';
import controller from '../controller/products.controller';
import productsMiddleware from '../middleware/products.middleware';

const router = Router();

router.get('/', controller.getAll);
router.post(
  '/', 
  productsMiddleware.validateName,
  productsMiddleware.validateAmount,
  controller.addProduct,
);

export default router;
