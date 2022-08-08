const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000 || process.env.PORT;
const controllers = require('./controllers/movies.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/dist'));

app.get('/movies', controllers.get);
app.post('/movies', controllers.post);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.exports.app = app;