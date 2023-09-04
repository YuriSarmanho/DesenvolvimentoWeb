-- SELECT * FROM sales
-- WHERE date_fulfilled IS NOT NULL;

-- SELECT * FROM sales
-- WHERE date_fulfilled - date_created <= 5;

-- SELECT * FROM sales -- if the dates were stored as TIMESTAMP
-- WHERE EXTRACT(DAY FROM date_fulfilled - date_created ) <= 5;