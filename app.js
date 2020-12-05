const express = require('express');

const app = express();

// routes
app.get('/', (request, response) => {
  response.send('hellow');
});

app.get('/post', (request, response) => {
  response.send('post');
});

app.listen(3000);