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

// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

// pool.query("SELECT * FROM jokes", (err, res) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(res.rows);
//   pool.end();
// });
const showJokeInConsole = (joke) => {
  console.log("\n 🔥🔥 SUPER JOKE YEAH! 🔥🔥\n");
  console.log(joke.question);
  console.log(joke.answer);
  console.log("hahahahahahah.");
};

pool
  .query(
    "SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id"
  )
  .then((res) => res.rows)
  .then((rows) => {
    rows.forEach((joke) => showJokeInConsole(joke));
  })
  .catch((err) => console.log(err))
  .finally(() => pool.end());

// {
//   id: 9,
//   question: 'What do you call a fly without wings?',
//   answer: 'A walk',
//   rating: 5,
//   author_id: 9,
//   name: 'Dusty',
//   funny: true,
//   best_friend_id: 1,
//   description: 'A student in nov 22',
//   joke_id: 10
// },

const randomId = Math.floor(Math.random() * 10) + 1;

const query = `SELECT * FROM jokes WHERE id = $1`;
const args = [randomId];

pool
  .query(query, args)
  .then((res) => res.rows)
  .then((rows) => console.log(rows));
