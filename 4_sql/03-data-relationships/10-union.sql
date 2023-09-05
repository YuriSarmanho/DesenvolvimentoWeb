SELECT * FROM users 
WHERE id < 3
UNION       --The number of the columns must to be the same
SELECT * FROM users
WHERE id > 5;