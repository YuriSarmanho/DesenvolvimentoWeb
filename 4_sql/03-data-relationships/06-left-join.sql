SELECT * 
FROM users AS u
LEFT JOIN addresses AS a ON a.id = u.address_id;