import { Request, Response } from 'express';
import services from '../services/products.services';

const getAll = async (_req: Request, res: Response) => {
  const result = await services.getAll();

  return res.status(200).json(result);
};

export default { getAll };
