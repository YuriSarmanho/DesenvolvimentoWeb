SELECT *
FROM users AS u
INNER JOIN addresses AS a ON u.address_id = a.id
INNER JOIN cities AS c ON a.city_id = c.id;

-- SELECT * 
-- FROM addresses AS a
-- INNER JOIN cities AS c ON a.city_id = c.id;