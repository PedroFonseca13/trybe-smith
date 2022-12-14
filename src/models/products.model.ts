import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/products.interface';

const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute(query);
  return result as IProduct[];
};

const addProduct = async (product: IProduct): Promise <IProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;
  const productWithId: IProduct = { id, name, amount };
  return productWithId;
};

const getById = async (orderId: number): Promise<IProduct[]> => {
  const query = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';

  const [result] = await connection.execute(query, [orderId]);

  return result as IProduct[];
};

export default { getAll, addProduct, getById };
