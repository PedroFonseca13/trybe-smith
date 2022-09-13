import models from '../models/products.model';

const getAll = async () => {
  const result = await models.getAll();

  return result;
};

export default { getAll };
