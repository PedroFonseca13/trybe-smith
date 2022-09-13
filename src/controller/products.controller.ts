import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import services from '../services/products.services';

const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await services.getAll();

    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR || 500).json(err);
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body;

    if (!name || !amount) {
      res.status(StatusCodes.BAD_REQUEST).send('Missing some fields');
      return;
    }

    const product = await services.addProduct(req.body);

    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR || 500).json(error);
  }
};

export default { getAll, addProduct };
