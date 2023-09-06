CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (300) NOT NULL,
    last_name VARCHAR (300) NOT NULL,
    birthday DATE NOT NULL,
    -- email VARCHAR(300) REFERENCES intranet_accounts (email)
    email VARCHAR (300) UNIQUE NOT NULL
);

CREATE TABLE intranet_accounts (
    id SERIAL PRIMARY KEY,
    email VARCHAR (200) REFERENCES employees (email) ON DELETE CASCADE,
    password VARCHAR(200) NOT NULL
);


CREATE TABLE buildings (
    building_id SERIAL PRIMARY KEY,
    building_name VARCHAR (200) NOT NULL
);

CREATE TABLE teams (
    teams_id SERIAL PRIMARY KEY,
    teams_name VARCHAR(200) NOT NULL,
    building_id INT REFERENCES buildings (building_id)
);

CREATE TABLE projects (
    projects_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    deadline DATE NOT NULL,
    employees_id INT NOT NULL
);