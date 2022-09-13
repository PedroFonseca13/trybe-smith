import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

const createToken = (user: IUser) => {
  const token = jwt.sign({
    data: user,
  }, jwtSecret as string, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token: string) => {
  try {
    /* Através do método verify, podemos validar e decodificar o nosso jwt */
    const { data } = jwt.verify(token, jwtSecret as string) as { data: string };

    return data;
  } catch (_error) {
    const error = new Error('Token invalid');
    error.name = 'UnauthorizedError';
    throw error;
  }
};

export default { createToken, validateToken };
