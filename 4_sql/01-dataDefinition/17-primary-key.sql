DROP TABLE users;
DROP TABLE employers;
DROP TABLE conversations;

-- CREATE TYPE employment_status AS ENUM('self-employed', 'employed','unemployed');

CREATE TABLE users (
    -- id SERIAL PRIMARY KEY, --Postgresql
    id INT PRIMARY KEY AUTO_INCREMENT,--MySQL
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    full_name VARCHAR(401) GENERATED ALWAYS AS (CONCAT(first_name," ",last_name)),
    -- full_name VARCHAR(300) NOT NULL,
    -- yearly_salary INT CHECK (yearly_salary > 0),
    current_status ENUM('self-employed', 'employed','unemployed') --MySQL 
    -- current_status employment_status   
);

CREATE TABLE employers(
    company_name VARCHAR(300) NOT NULL,
    company_address VARCHAR(300) NOT NULL,
    yearly_revenue FLOAT CHECK(yearly_revenue > 0),
    in_hiring BOOLEAN DEFAULT FALSE
);

CREATE TABLE consversation (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    employer_id INT,
    message TEXT NOT NULL
);