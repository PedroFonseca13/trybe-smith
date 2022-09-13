import connection from './connection';
import { IProduct } from '../interfaces/products.interface';

const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute(query);
  return result as IProduct[];
};

export default { getAll };
