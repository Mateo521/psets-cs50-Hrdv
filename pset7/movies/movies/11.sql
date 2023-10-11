SELECT DISTINCT title FROM people
JOIN stars ON stars.person_id = people.id
-- JOIN directors ON directors.person_id = people.id
JOIN ratings ON ratings.movie_id
JOIN movies ON movies.id = stars.movie_id


WHERE name = "Chadwick Boseman"

ORDER BY rating DESC
LIMIT 5;