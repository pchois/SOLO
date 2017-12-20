SELECT year FROM Years y
JOIN ModelMap mm on y.id = mm.year_id
WHERE mm.model_id = 3 ORDER BY year ASC