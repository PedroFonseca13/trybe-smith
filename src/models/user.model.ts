import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/user.interface';
import connection from './connection';

const addUser = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;

  const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)';

  await connection.execute<ResultSetHeader>(
    query,
    [username, classe, level, password],
  );

  const userAdded: IUser = { username, classe, level, password };
  return userAdded;
};

export default { addUser };
