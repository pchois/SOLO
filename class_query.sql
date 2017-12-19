SELECT class FROM Classes c
JOIN Models m on c.id = m.class_id
JOIN Brands b on b.id = m.brand_id
JOIN ModelMap mm on m.id = mm.model_id
JOIN Years y on y.id = mm.year_id
WHERE (y.year = 2000 AND b.brand = 'Audi' AND m.model = '80' AND m.trim = '') OR (y.year = 999 AND b.brand = 'Audi' AND m.model = '80' AND m.trim = '')