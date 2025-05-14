const db = require('../db');

// get all products
exports.all = async () => {
  const { rows } = await db.getPool().query('SELECT * FROM "product" ORDER BY "productid"');
  return rows;
};

// get a product by id
exports.get = async (id) => {
  const { rows } = await db.getPool().query('SELECT * FROM "product" WHERE "productid" = $1', [id]);
  return rows[0];
};

// add a new product
exports.add = async (product) => {
  const { rows } = await db.getPool().query(
    'INSERT INTO "product"("name", "price", "size") VALUES($1, $2, $3) RETURNING *',
    [product.name, product.price, product.size]
  );
  return rows[0];
};

// update an existing product
exports.update = async (id, product) => {
  const { rows } = await db.getPool().query(
    'UPDATE "product" SET "name" = $1, "price" = $2, "size" = $3 WHERE "productid" = $4 RETURNING *',
    [product.name, product.price, product.size, id]
  );
  return rows[0];
};

// delete a product
exports.delete = async (id) => {
  await db.getPool().query('DELETE FROM "product" WHERE "productid" = $1', [id]);
  return { success: true };
};