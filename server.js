"use strict";

// API URL
const BACKEND_URL = "https://" + process.env.API_URL;
const API_URL = BACKEND_URL + "/api";

// Message socket route on backend server
const SOCKET_ROUTE = "/socket.io";

// Express
const express = require("express");
const app = express();

// Fetch API for Node
const fetch = require("node-fetch");

// Middleware
// User sessions for authentication
const session = require("cookie-session");
// Create a session cookie
const sess = {
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60000, // Expires in 60 mins
    httpOnly: true
  }
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));

// Authentication middleware
const authMiddleware = (req, res, next) => {
  if (!req.session || !req.session.user) {
    console.error("[SOCKET] WebSocket Auth Error");
    res.status(401).send("Not logged in");
  } else {
    next();
  }
};

// Allows server to act as proxy for websocket connections
// Used for forwarding messages to MHAPy backend
const { createProxyMiddleware } = require("http-proxy-middleware");
// Forward websocket to MHAPy backend
app.use(
  SOCKET_ROUTE,
  authMiddleware,
  createProxyMiddleware({ target: BACKEND_URL, changeOrigin: true, ws: true })
);
// Parses HTTP JSON body into JS object
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route, login user
app.post("/auth/login", (req, res) => {
  const email = req.body.email || "";
  const password = req.body.password || "";
  const body = { email: email, password: password };
  // Get user account by email and password
  const request = new fetch.Request(API_URL + "/user/login", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  // Send request
  fetch(request)
    .then((apiRes) => {
      // Parse response as json
      apiRes
        .json()
        .then((body) => {
          if (body !== undefined) {
            if (body.error) {
              res.status(401).send("Invalid username or password.");
            } else {
              // Clean user data
              const userData = {
                id: body.data["_id"],
                username: body.data["user_name"],
                email: body.data["email"],
                bio: body.data["bio"],
                img: body.data["img"],
                token: body.data["token"],
                created: body.data["created"]
              };
              req.session.user = userData.id;
              req.session.save();
              res.send(userData);
            }
          } else {
            return Promise.reject(new Error());
          }
        })
        .catch(() => {
          res.status(500).send(new Error("Internal Server Error"));
        });
    })
    .catch(() => {
      res.status(500).send(new Error("Internal Server Error"));
    });
});

// POST route, logout user
app.post("/auth/logout", (req, res) => {
  let success = true;
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        // Logout failed
        res.status(500).send("Internal Server Error");
        success = false;
      }
    });
  }
  // Logout succeeded or session not found
  if (success) {
    res.send();
  }
});

app.use(express.static(__dirname + "/client/build"));
// Serve index.html
app.get("*", (req, res) => {
  // Serve index.html
  res.sendFile(__dirname + "/client/build/index.html");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = {};
