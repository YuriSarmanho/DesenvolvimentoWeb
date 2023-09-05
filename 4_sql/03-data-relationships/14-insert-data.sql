INSERT INTO cities (name) VALUES ('Berlin'),('New York'),('London');
INSERT INTO addresses (street, house_number, city_id) 
VALUES 
    ('TesteStreet','8A',3),
    ('Some Street','10',1),
    ('TesteStreet','1',3),
    ('My Street','101',2);

INSERT INTO users (first_name, last_name, email, address_id)
VALUES ('Yuri', 'Sarmanho', 'emaul@game.com', 2),
    ('Manuel', 'Monteiro', 'manu@game.com', 4),
    ('Julie', 'Teste', 'ju@game.com', 3);