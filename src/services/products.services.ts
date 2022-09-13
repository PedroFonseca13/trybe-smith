import models from '../models/products.model';
import IProduct from '../interfaces/products.interface';

const getAll = async () => {
  const result = await models.getAll();

  return result;
};

const addProduct = async (product: IProduct) => {
  const productWithId = await models.addProduct(product);

  return productWithId;
};

export default { getAll, addProduct };
