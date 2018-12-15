CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR(100) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  deparment_name VARCHAR(50) NOT NULL,
  price INTEGER(11),
  stock_quantity INTEGER(100),
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (12345, "kit kat", "snacks", 1.50, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (12678, "back pack", "school supplies", 11.00, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (16534, "ipad", "electronics", 250.00, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (13256, "headphones", "electronics", 19.99, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (16531, "chicken breast", "food", 6.50 , 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (16930, "laptop", "electronics", 750.00, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (19994, "chips ahoy", "snacks", 3.50, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (19734, "hershey", "snacks", 1.50, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (14897, "pencils pack of 50", "school supplies", 5.00, 100);

INSERT INTO products (item_id, product_name, department_name, price ,stock_quantity)
VALUES (19645, "notebook", "school supplies", 1.00, 100);


