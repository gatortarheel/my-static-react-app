const data = {
  products: [
    {
      id: 10,
      name: 'Watermelon',
      description: 'big fat one',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Freshly baked bread',
      description: 'Siced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Fresh Cortland apples',
      quantity: 1,
    },
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
