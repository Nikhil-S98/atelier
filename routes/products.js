const express = require('express');
const router = express.Router();
const Product = require('../models/products');

// list all products
router.get('/', async (req, res) => {
  const products = await Product.all();
  res.render('products/index', { products: products });
});

// display add product form
router.get('/form', async (req, res) => {
  res.render('products/form');
});

// display edit product form
router.get('/edit', async (req, res) => {
  const product = await Product.get(req.query.id);
  res.render('products/form', { product: product, isEdit: true });
});

// handle form submission (add/edit)
router.post('/upsert', async (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    size: req.body.size
  };
  
  if (req.body.productid) {
    await Product.update(req.body.productid, product);
  } else {
    await Product.add(product);
  }
  
  res.redirect('/products');
});

// delete a product
router.get('/delete/:id', async (req, res) => {
  await Product.delete(req.params.id);
  res.redirect('/products');
});

// show product details
router.get('/show/:id', async (req, res) => {
  const product = await Product.get(req.params.id);
  res.render('products/show', { product: product });
});

module.exports = router;