const { Pool } = require("pg");
// pools will use environment variables
// for connection information

const pool = new Pool({
  user: "labber",
  password: "labber",
  database: "jokes",
  port: 5432,
  host: "localhost",
});

const dbHelpers = {};

dbHelpers.fetchAllJokes = () => {
  const query =
    "SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id";
  return pool.query(query).then((res) => res.rows);
};

dbHelpers.fetchAllAuthors = () => {
  const query = "SELECT * FROM authors";
  return pool.query(query).then((res) => res.rows);
};

dbHelpers.fetchJokeById = (id) => {
  const query =
    "SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = $1";
  return pool.query(query, [id]).then((res) => res.rows[0]);
};

dbHelpers.insertJoke = (question, answer, rating, authorId) => {
  const query = `
  INSERT INTO
    jokes (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
`;

  const args = [question, answer, rating, authorId];

  return pool.query(query, args).then((res) => res.rows[0]);
};

module.exports = dbHelpers;
