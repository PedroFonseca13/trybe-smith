import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import IOrders from '../interfaces/orders.interface';

const getAll = async (): Promise<IOrders[]> => {
  const query = `
      SELECT * FROM Trybesmith.Orders
    `;
  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as IOrders[];
};

const addOrder = async (userId: number) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, userId);
  const { insertId } = result;
  const newOrder = { id: insertId, userId };
  return newOrder;
};

export default { getAll, addOrder };
