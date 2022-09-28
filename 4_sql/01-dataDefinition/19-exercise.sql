-- Task 1 : Create DataBase
--CREATE DATABASE online_ shop;


--Task 2 + 3: Create and configure table

-- CREATE TABLE products(
--     product_name VARCHAR(200),
--     price NUMERIC(10,2),--Because is exac
--     description TEXT,
--     amount_in_stock INT,
--     img_path VARCHAR(500) -- 'upload/img/products/some-product.jpg' 
-- );

--Task 4: Inserting dummy data

-- INSERT INTO products(price, product_name, description, amount_in_stock,img_path)
-- VALUES (
--     12.99,
--     'A book',
--     "this is a book - and this text could be way long",
--     39, 
--     'upload/img/products/book.jpg'
--     )

--Task 5: Add constraint

-- ALTER TABLE products
-- MODIFY COLUMN product_name VARCHAR(200) NOT NULL,
-- MODIFY COLUMN price NUMERIC(10,2) NOT NULL CHECK(price>0),
-- MODIFY COLUMN description TEXT NOT NULL,
-- MODIFY COLUMN amount_in_stock INT CHECK(amount_in_stock >= 0)

-- ALTER COLUMN name SET NOT NULL,
-- ALTER COLUMN price SET NOT NULL,
-- ALTER COLUMN description SET NULL,
-- ADD CONSTRAINT price_positive CHECK (price>0),
-- ADD CONSTRAINT amount_in_stock_positive CHECK (amount_in_stock >= 0)
-- ;

-- Task 6: Add id column

ALTER TABLE products
-- ADD COLUMN id INT PRIMARY KEY AUTO_INCREMENT; --MySQL
ADD COLUMN id SERIAL PRIMARY KEY;