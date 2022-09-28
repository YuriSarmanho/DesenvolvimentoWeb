--Task 1: Create database
-- CREATE DATABASE sales();

--Task 2: Create tables

CREATE TABLE sales(
    id INT PRIMARY KEY AUTO_INCREMENT, --MySQL
    -- id SERIAL PRIMARY KEY--Postgres
    date_created DATE DEFAULT (CURRENT_DATE),
    date_fulfilled DATE,
    customer_name VARCHAR(200) NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    volume NUMERIC(10,3) NOT NULL CHECK(volume >= 0),
    is_recurring BOOLEAN DEFAULT FALSE,
    is_disputed BOOLEAN DEFAULT FALSE
);