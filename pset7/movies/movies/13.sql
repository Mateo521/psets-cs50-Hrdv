SELECT DISTINCT name FROM people
JOIN stars ON stars.person_id = people.id
-- JOIN directors ON directors.person_id = people.id
-- JOIN ratings ON ratings.movie_id
JOIN movies ON movies.id = stars.movie_id
WHERE name = "Kevin Bacon" AND birth = 1958;