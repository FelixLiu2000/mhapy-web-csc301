'use strict';
const log = console.log;

// Express
const express = require('express');
const app = express();

// Middleware
// Parses HTTP JSON body into JS object
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/client/build'));
// Serve index.html
app.get('*', (req, res) => {
  // Serve index.html
  res.sendFile(__dirname + '/client/build/index.html');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});

module.exports = {};
