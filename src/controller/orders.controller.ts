import { Request, Response } from 'express';
import services from '../services/orders.services';

const getAll = async (_req: Request, res: Response) => {
  try {
    const { status, result } = await services.getAll();
    return res.status(status).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
};

export default { getAll };
