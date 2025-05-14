create table if not exists Product (
  ProductID serial primary key,
  Name varchar,
  Price decimal,
  Size varchar
);

-- products
insert into Product (Name, Price, Size) Values
  ('Silk Gown', 2995.00, 'S,M,L'),
  ('Leather Handbag', 1850.00, 'One Size');