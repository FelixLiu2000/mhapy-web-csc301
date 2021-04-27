"use strict";

// Message socket route on backend server
const SOCKET_ROUTE = "/socket.io";
// API route on this server
const API_ROUTE = "/api";

// API URLs
const BACKEND_URL = process.env.API_URL;
const API_URL = BACKEND_URL + API_ROUTE;

// Express
const express = require("express");
const app = express();

/** Middleware **/

// User sessions for authentication
const session = require("cookie-session");
// Create a session cookie
const sess = {
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: false,
  maxAge: 60 * 60000, // Cookie expires in 60 mins
  httpOnly: true,
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.secure = true; // serve secure cookies
}
app.use(session(sess));

// Authentication middleware
const authMiddleware = (req, res, next) => {
  if (!req.session || !req.session.user) {
    if (req.baseUrl === SOCKET_ROUTE) {
      console.error("[SOCKET] WebSocket Auth Error");
    } else if (req.baseUrl === API_ROUTE) {
      console.error(`[API] Unauthorized attempt to ${req.method} at
       ${req.baseUrl + req.path}`);
    }
    res.status(401).send("Unauthorized, not logged in");
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

// Exports
module.exports = {
  API_URL,
  BACKEND_URL,
  authMiddleware,
};

/** Routes **/

// API routes
const apiRouter = require("./routes");
app.use("/api", apiRouter);

// Serve static files
app.use(express.static(__dirname + "/client/build"));
// Serve index.html (React client)
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
