-- CREATE TABLE users ( --For MySQL
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(200) NOT NULL,
--     last_name VARCHAR(200) NOT NULL,
--     full_name VARCHAR(401) GENERATED ALWAYS AS (CONCAT(first_name,'',last_name)),
--     yearly_salary INT CHECK (yearly_salary > 0),
--     current_status employment_status
-- );

-- CREATE TABLE users ( --For Postgresql
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(200) NOT NULL,
--     last_name VARCHAR(200) NOT NULL,
--     full_name VARCHAR(401) GENERATED ALWAYS AS (CONCAT(first_name,'',last_name)),
--     yearly_salary INT CHECK (yearly_salary > 0),
--     current_status employment_status
-- );

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(300) NOT NULL,
    yearly_salary INT CHECK (yearly_salary > 0),
    current_status employment_status
);

CREATE TABLE employers (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(300) NOT NULL,
    company_address VARCHAR(300) NOT NULL,
    yearly_revenue FLOAT CHECK (yearly_revenue > 0),
    is_hiring BOOLEAN DEFAULT FALSE 
);

CREATE TABLE conversation (
    id SERIAL PRIMARY KEY,
    user_id INT,
    employer_id INT,
    message TEXT NOT NULL,
    data_sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP

) ;