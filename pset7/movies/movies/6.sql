SELECT avg(movie_id)
FROM ratings
JOIN movies ON movies.id = ratings.movie_id

WHERE year = 2012;