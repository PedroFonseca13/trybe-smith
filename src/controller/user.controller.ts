import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUser from '../interfaces/user.interface';
import IUserCredentials from '../interfaces/userCredentials.interface';
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

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getUser = req.body as IUserCredentials;
    const user = await services.login(getUser);

    return res.status(StatusCodes.OK).json({ token: user });
  } catch (error) {
    return next(error);
  }
};

export default { addUser, login };
