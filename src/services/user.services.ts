import IUser from '../interfaces/user.interface';
import models from '../models/user.model';
import jwtService from './jwt.services';

const addUser = async (user: IUser) => {
  const result = await models.addUser(user);
  const token = jwtService.createToken(result);

  return { token };
};

export default { addUser };
