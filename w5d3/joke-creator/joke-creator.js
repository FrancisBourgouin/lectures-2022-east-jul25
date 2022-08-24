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

// INSERT INTO
//   jokes (question, answer, rating, author_id)
// VALUES
//   ('Knock knock, whos there, to who', 'no, to whom',3, 1);

// console.log(process.argv);

const question = process.argv[2];
const answer = process.argv[3];
const rating = Number(process.argv[4]);
const authorId = Number(process.argv[5]);

console.log(question, answer, rating, authorId);

const query = `
  INSERT INTO
    jokes (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
`;

const args = [question, answer, rating, authorId];

pool
  .query(query, args)
  .then((res) => res.rows)
  .then((rows) => console.log(rows))
  .catch((err) => console.log(err));
