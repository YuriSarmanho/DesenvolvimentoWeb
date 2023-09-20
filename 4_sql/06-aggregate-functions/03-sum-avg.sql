-- SELECT SUM(amount_billed) FROM bookings;
SELECT ROUND(AVG(num_guests), 2) --Avarege ignores NULL values
FROM bookings;