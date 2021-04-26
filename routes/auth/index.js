/* eslint-disable camelcase */
// Routes for user authentication
const express = require("express");
const router = new express.Router();
const apiRequest = require("../../helpers/apiRequest");
const cleanUserData = require("../../helpers/cleanUserData");

// POST route, login user
// /api/auth/login
router.post("/login", async (req, res) => {
  const API_ROUTE = "/user/login";
  const email = req.body.email || "";
  const password = req.body.password || "";
  const reqBody = { email: email, password: password };
  // Get user account by email and password
  const apiBody = await apiRequest(reqBody, API_ROUTE);
  if (apiBody) {
    // Non empty response body
    if (apiBody.error) {
      // Request body contained an error
      res.status(401).send("Invalid username or password.");
    } else {
      // Get clean user data
      const userData = cleanUserData(apiBody.data);
      req.session.user = userData.id;
      req.session.save();
      res.send(userData);
    }
  } else {
    res.status(500).send(new Error("Internal Server Error"));
  }
});

// POST route, logout user
// /api/auth/logout
router.post("/logout", (req, res) => {
  let success = true;
  if (req.session) {
    // Destroy the session
    try {
      req.session = null;
    } catch {
      success = false;
    }
  }
  // Logout succeeded or session not found
  if (success) {
    res.send();
  } else {
    res.status(500).send("Internal Server Error");
  }
});

// GET route, check if user session is valid
// /api/auth/check-session
router.get("/check-session", (req, res) => {
  const session = req.session || {};
  if (session.user) {
    res.send({ id: session.user });
  } else {
    res.status(401).send("Unauthorized, not logged in");
  }
});

module.exports = router;
