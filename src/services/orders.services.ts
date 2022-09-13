import models from '../models/orders.model';
import productsModel from '../models/products.model';

const getAll = async () => {
  const orders = await models.getAll();
  const result = await Promise.all(orders.map(async (order) => {
    const products = await productsModel.getById(order.id as number);
    return { ...order, productsIds: products.map(({ id }) => id) };
  }));

  return { status: 200, result };
};

export default { getAll };
