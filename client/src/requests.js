const axios = require('axios');
let App = require('/components/App.jsx');

const API_URL = 'https://127.0.0.1:3000/classes/';

axios.get(`${API_URL}/movies`)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })

  axiox.post(`${API_URL}/movies`, {
    title: 'Test Movie',
    description: 'You gotta test out this movie. It was lit',
    image_url: 'https://s3.amazonaws.com/images.seroundtable.com/google-black-1545140719.jpg'
  })
    .then(response => {
      console.log(response);
    })