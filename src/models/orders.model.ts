import { RowDataPacket } from 'mysql2';

import connection from './connection';
import IOrders from '../interfaces/orders.interface';

const getAll = async (): Promise<IOrders[]> => {
  const query = `
      SELECT * FROM Trybesmith.Orders
    `;
  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as IOrders[];
};

export default { getAll };
