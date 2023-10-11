SELECT name FROM people
JOIN movies ON movies.id = stars.movie_id
JOIN stars ON stars.person_id = people.id
WHERE year = 2004
GROUP BY person_id , name

ORDER BY (birth);
