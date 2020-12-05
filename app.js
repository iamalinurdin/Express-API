require('dotenv/config');

const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// initiate connect to mongo server
const connect = mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

// import routes
const PostRoutes = require('./routes/PostRoutes');
const { use } = require('./routes/PostRoutes');

app.use('/post', PostRoutes);

app.get('/', (request, response) => {
  response.send('ok')
});

app.listen(3000);