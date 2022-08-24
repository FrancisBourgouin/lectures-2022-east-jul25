-- SELECT * FROM authors;

-- SELECT * 
-- FROM jokes
-- JOIN authors
-- ON authors.id = jokes.author_id
-- WHERE 
--   description ILIKE '%march%'
-- ;


-- SELECT * 
-- FROM jokes
-- WHERE
--   id IN (SELECT id FROM authors WHERE description ILIKE '%march%')
-- ;

-- SELECT * 
-- FROM jokes
-- WHERE
--   id IN (1,2,3,4)
-- ;


-- SELF JOINS ?

-- User database, best_friend_id


-- SELECT 
--   main.*, best_friend.name AS best_friend_name 
-- FROM authors main, authors best_friend
-- JOIN best_friend 
-- ON main.id = best_friend.best_friend_id;