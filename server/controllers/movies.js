var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.movies.getAll((err, movies) => {
      if (err) {
        // console.log(err);
        let statusCode = 404;
        res.writeHead(statusCode);
      } else {
        let statusCode = 200;
        res.writeHead(statusCode); // not needed using .json below
        res.write(JSON.stringify(movies)); // switch out with res.json(data);
      }
      res.end();
    });
  }, // a function which handles a get request for all movies
  post: function (req, res) {
    // console.log(req.body);
    let postData = [req.body.title, req.body.description];
    models.movies.create(postData, (err, data) => {
      if (err) {
        // console.log(err);
        throw Error(err);
      } else {
        // console.log(data);
        res.writeHead(200);
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
