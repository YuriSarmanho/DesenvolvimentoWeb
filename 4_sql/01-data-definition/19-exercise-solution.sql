-- CREATE DATABASE online_shop;

-- CREATE TABLE products (
--     id SERIAL PRIMARY KEY,
--     product_name VARCHAR(300),
--     price NUMERIC(4,2),
--     amount_in_stock INT,
--     image VARCHAR(250)
-- )

-- INSERT INTO products (product_name, price,amount_in_stock,image) 
-- VALUES ('t-shirt',19.9,30,'src/img/t-shirt.png');

-- ALTER TABLE products ADD CONSTRAINT amount_in_stock_positive CHECK (amount_in_stock > 0);

-- ALTER TABLE products
-- ALTER COLUMN price SET NOT NULL,
-- ALTER COLUMN product_name SET NOT NULL,
-- ALTER COLUMN image SET NOT NULL;

