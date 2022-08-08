var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let queryStr = 'SELECT * FROM movies';
    db.query(queryStr, (err, message) => {
      if (err) {
        callback(err);
      } else {
        callback(null, message);
      }
    });
  }, // a function which produces all the messages
  create: function (postData, callback) {
    console.log('model postData ', postData);
    let queryStr = 'INSERT INTO movies (title) VALUES (?)';
    db.query(queryStr, [postData.title], (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
