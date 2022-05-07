var mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movies'
});

connection.connect();

module.exports.connection = connection;