CREATE TABLE company_buildings (
    id SERIAL PRIMARY KEY,
    name VARCHAR (200) NOT NULL
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(300) NOT NULL,
    building_id INT REFERENCES company_buildings ON DELETE SET NULL 
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (300) NOT NULL,
    last_name VARCHAR (300) NOT NULL,
    birthday DATE NOT NULL,
    email VARCHAR (300) UNIQUE NOT NULL,
    team_id INT DEFAULT 1 REFERENCES teams ON DELETE SET DEFAULT
);

CREATE TABLE intranet_accounts (
    id SERIAL PRIMARY KEY,
    email VARCHAR (200) REFERENCES employees (email) ON DELETE CASCADE,
    password VARCHAR(200) NOT NULL
);




-- CREATE TABLE projects (
--     projects_id SERIAL PRIMARY KEY,
--     title VARCHAR(200) NOT NULL,
--     deadline DATE NOT NULL,
--     employees_id INT NOT NULL
-- );