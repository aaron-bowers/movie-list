var models = require('../models/movies.js');

module.exports = {
  get: function (req, res) {
    models.getAll((err, movies) => {
      if (err) {
        console.log(err);
        res.status(404).send('Oops, didn\'t get anything');
      } else {
        res.json(movies);
      }
    });
  },

  post: function (req, res) {
    console.log('req ', req);
    // let postData = [req.body];
    // console.log(postData);
    models.create(req.body, (err, movie) => {
      if (err) {
        // console.log(err);
        res.status(400).send('Unable to add movie data');
      } else {
        // console.log(data);
        res.json(movie);
      }
    });
  }
};
