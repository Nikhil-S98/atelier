const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const db = require('../db');

router.get('/', async (req, res, next) => {
  const products = await Product.all()
  res.render('products/index', { title: 'Atelier || products', products: products });
});

router.get('/form', async (req, res, next) => {
  res.render('products/form', { title: 'Atelier || products'});
});

module.exports = router;