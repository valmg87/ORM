const { Product } = require('../models');

const productData = [
  {
    product_name: 'Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Shoes',
    price: 80.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Baseball Jersey',
    price: 72.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Vinyl Record',
    price: 18.99,
    stock: 90,
    category_id: 3,
  },
  {
    product_name: 'Panama Hat',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
