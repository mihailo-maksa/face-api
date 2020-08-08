const express = require('express');
const faceApi = require('face-api.js');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { faceapi: faceApi });
});

app.listen(8000, (err) => {
  if (err) throw err;
  console.log('Server is running on port 8000.');
});
