import IUser from '../interfaces/user.interface';
import IUserCredentials from '../interfaces/userCredentials.interface';
import models from '../models/user.model';
import jwtService from './jwt.services';

const addUser = async (user: IUser) => {
  const result = await models.addUser(user);
  const token = jwtService.createToken(result);

  return { token };
};

const login = async (user: IUserCredentials) => {
  const userFound = await models.getUserByUserName(user.username);

  if (!userFound || userFound.password !== user.password) {
    return { status: 401, message: 'Invalid username or password' };
  }

  const token = jwtService.createToken(userFound);

  return token;
};

export default { addUser, login };
