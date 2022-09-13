import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import models from '../models/user.model';

const verifyUserNameAndPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const userFound = await models.getUserByUserName(username);

  if (!userFound || userFound.password !== password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  console.log('aqui', userFound.password);

  next();
};

async function validateUserNameAndPassword(_req: Request, _res: Response, _next: NextFunction) {
  const result = await verifyUserNameAndPassword;

  Promise.resolve(result);

  console.log('aqui', result);
}

function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  if (username === undefined) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }

  if (typeof username !== 'string') {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"username" must be a string' });
  }

  if (username.length < 3) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: '"username" length must be at least 3 characters long' });
  }

  next();
}

function validateUserPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }

  if (typeof password !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" must be a string' });
  }

  if (password.length < 8) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  next();
}

export default {
  validateUsername,
  validateUserPassword,
  validateUserNameAndPassword,
  verifyUserNameAndPassword,
};
