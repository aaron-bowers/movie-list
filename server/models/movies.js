var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let queryStr = 'SELECT movies FROM movies';
    db.query(queryStr, (err, message) => {
      if (err) {
        callback(err);
      } else {
        callback(null, message);
      }
    });
  }, // a function which produces all the messages
  create: function (postData, callback) {
    let queryStr = 'INSERT INTO movies (title, description) VALUES (?, ?)';
    db.query(queryStr, postData, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
