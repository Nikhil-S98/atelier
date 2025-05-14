-- Create Collections table
CREATE TABLE "Collections" (
  "CollectionID" serial PRIMARY KEY,
  "Name" text,
  "Season" text,
  "year" int,
  "LaunchDate" date
);

-- Create Manufacturers table
CREATE TABLE "Manufacturers" (
  "ManufacturerID" serial PRIMARY KEY,
  "Name" text,
  "ContactPerson" text,
  "Email" text,
  "Phone" text,
  "Address" text
);

-- Create Product table
CREATE TABLE "Product" (
  "ProductID" serial PRIMARY KEY,
  "Name" text,
  "Price" decimal,
  "Size" text,
  "CollectionID" int REFERENCES "Collections"("CollectionID"),
  "ManufacturerID" int REFERENCES "Manufacturers"("ManufacturerID")
);

-- Create Customers table
CREATE TABLE "Customers" (
  "CustomerID" serial PRIMARY KEY,
  "FirstName" text,
  "LastName" text,
  "Email" text,
  "Phone" text,
  "Address" text,
  "JoinDate" date
);

-- Create Transactions table
CREATE TABLE "Transactions" (
  "TransactionID" serial PRIMARY KEY,
  "CustomerID" int REFERENCES "Customers"("CustomerID"),
  "Date" date,
  "TotalAmount" decimal,
  "Status" text
);

-- Create TransactionProducts junction table
CREATE TABLE "TransactionProducts" (
  "TransactionID" int REFERENCES "Transactions"("TransactionID"),
  "ProductID" int REFERENCES "Product"("ProductID"),
  "Quantity" int,
  "Price" decimal,
  PRIMARY KEY ("TransactionID", "ProductID")
);

-- Create Inventory table
CREATE TABLE "Inventory" (
  "InventoryID" serial PRIMARY KEY,
  "ProductID" int REFERENCES "Product"("ProductID"),
  "Quantity" int DEFAULT 0
);