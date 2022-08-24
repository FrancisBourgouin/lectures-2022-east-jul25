const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const { Pool } = require("pg");
// // pools will use environment variables
// // for connection information

// const pool = new Pool({
//   user: "labber",
//   password: "labber",
//   database: "jokes",
//   port: 5432,
//   host: "localhost",
// });
const dbHelpers = require("./db/dbHelpers");
const { fetchAllJokes, fetchJokeById, fetchAllAuthors, insertJoke } = dbHelpers;
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/jokes", (req, res) => {
  fetchAllJokes()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => console.log(err));
});

app.get("/api/jokes/:joke_id", (req, res) => {
  fetchJokeById(req.params.joke_id)
    .then((joke) => {
      res.json(joke);
    })
    .catch((err) => console.log(err));
});

app.get("/api/authors", (req, res) => {
  fetchAllAuthors().then((authors) => {
    res.json(authors);
  });
});

app.get("/jokes/new", (req, res) => {
  fetchAllAuthors().then((authors) => {
    res.render("joke_form", { authors });
  });
});

app.post("/jokes", (req, res) => {
  const { question, answer, rating, author_id } = req.body;

  insertJoke(question, answer, rating, author_id)
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
});

module.exports = app;
