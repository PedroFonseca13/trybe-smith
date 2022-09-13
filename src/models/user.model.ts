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

  const userAdded: IUser = { username, classe, level };
  return userAdded;
};

const getUserByUserName = async (username: string): Promise<IUser | null> => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const values = [username];
  const [result] = await connection.execute(query, values);

  const [user] = result as IUser[];
  return user || null;
};

export default { addUser, getUserByUserName };
