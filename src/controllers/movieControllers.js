const movies = [];

const database = require("../../database");

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from movies where id = ?", [id])
    .then(([movies]) => {
      if (movies.find((movie) => (movie.id = id))) {
        res.json(movies.find((movie) => (movie.id = id)));
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.status(500).send("Not Found");
    });
};

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users.find((user) => (user.id = id))) {
        res.json(users.find((user) => (user.id = id)));
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.status(500).send("Not Found");
    });
};

module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUsersById,
};
