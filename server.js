'use strict';
const log = console.log;

// Express
const express = require('express');
const app = express();

// Fetch API for Node
const fetch = require('node-fetch');

// Middleware
// Parses HTTP JSON body into JS object
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API URL
const API_URL = 'http://' + process.env.API_URL + '/api';

// A POST route to login the user
app.post('/api/login', (req, res) => {
  const email = req.body.email || '';
  const password = req.body.password || '';
  const body = {email: email, password: password};
  // Get user account by email and password
  const request = new fetch.Request(API_URL + '/user/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  // Send request
  fetch(request).then((apiRes) => {
    // Parse response as json
    apiRes.json().then((body) => {
      if (body !== undefined) {
        if (body.error) {
          res.status(401).send('Invalid username or password.');
        } else {
          // Clean user data
          delete body.data['__v'];
          const id = body.data['_id'];
          delete body.data['_id'];
          body.data.id = id;
          res.send(body.data);
        }
      } else {
        return Promise.reject(new Error());
      }
    }).catch(() => {
      res.status(500).send(new Error('Internal Server Error'));
    });
  }).catch(() => {
    res.status(500).send(new Error('Internal Server Error'));
  });
});

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
