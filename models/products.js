const db = require('../db');

// get all products
exports.all = async () => {
  const { rows } = await db.getPool().query('SELECT * FROM "product" ORDER BY "productid"');
  return rows;
};

// get a product by ID
exports.get = async (id) => {
  const { rows } = await db.getPool().query('SELECT * FROM "product" WHERE "productid" = $1', [id]);
  return rows[0];
};

// add a new product
exports.add = async (product) => {
  const { rows } = await db.getPool().query(
    'INSERT INTO "Product"("Name", "Price", "Size") VALUES($1, $2, $3) RETURNING *',
    [product.name, product.price, product.size]
  );
  return rows[0];
};