/* eslint-disable camelcase */
// Routes for users
const express = require("express");
const router = new express.Router();
const { authMiddleware } = require("../../server");
const getUserChats = require("../../helpers/getUserChats");
const cleanUserData = require("../../helpers/cleanUserData");
const apiRequest = require("../../helpers/apiRequest");

// GET route, retrieve chats associated with a given user id
// /api/users/:id/chats
router.get("/:id/chats", authMiddleware, async (req, res) => {
  const userID = req.params.id;
  if (!userID) {
    res.status(400).send(new Error("Bad Request"));
    return;
  }
  // Logged in user is not the requested user
  if (userID !== req.session.user) {
    res.status(401).send("Unauthorized, cannot retrieve chats of other users");
  }
  const chats = await getUserChats(userID);
  if (!chats) {
    res.status(500).send(new Error("Internal Server Error"));
  } else {
    res.send(chats);
  }
});

// GET route, retrieve user information associated with user id
// /api/users/:id
router.get("/:id", authMiddleware, async (req, res) => {
  const userID = req.params.id;
  if (!userID) {
    res.status(400).send(new Error("Bad Request"));
    return;
  }
  // Logged in user is not the requested user
  if (userID !== req.session.user) {
    res.status(401).send("Unauthorized, cannot retrieve chats of other users");
  }
  const API_ROUTE = "/user/get";
  const reqBody = { user_id: userID };
  // Get user account by email and password
  const apiBody = await apiRequest(reqBody, API_ROUTE);
  if (apiBody) {
    // Non empty response body
    if (apiBody.error) {
      // Request body contained an error
      res.status(404).send("User not found");
    } else {
      // Get clean user data
      const userData = cleanUserData(apiBody.data);
      res.send(userData);
    }
  } else {
    res.status(500).send(new Error("Internal Server Error"));
  }
});

module.exports = router;
