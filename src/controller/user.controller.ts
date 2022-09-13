import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUser from '../interfaces/user.interface';
import services from '../services/user.services';

const addUser = async (req: Request, res: Response) => {
  try {
    const getUser = req.body as IUser;

    const user = await services.addUser(getUser);

    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR || 500).json(error);
  }
};

export default { addUser };
