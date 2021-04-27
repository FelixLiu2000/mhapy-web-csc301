/* eslint-disable camelcase */
// Routes for users
const express = require("express");
const router = new express.Router();
const { authMiddleware } = require("../../server");
const getUserChats = require("../../helpers/getUserChats");
const cleanUserData = require("../../helpers/cleanUserData");
const apiRequest = require("../../helpers/apiRequest");
// URL of the backend API to make requests to
const { BACKEND_URL } = require("../../server");
// Fetch API for Node
const fetch = require("node-fetch");

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

// GET route, retrieve profile picture associated with a given user id
// /api/users/images
router.get("/images", async (req, res) => {
  const file = req.query.file;
  if (!file) {
    res.status(404).send();
    return;
  }
  // Request image
  const IMG_ROUTE = `/uploads/users_profile_img/${file}`;
  const request = new fetch.Request(BACKEND_URL + IMG_ROUTE, {
    method: "GET",
    headers: {
      Accept: "image/png",
      "Content-Type": "image/png",
    },
  });
  const backendRes = await fetch(request);
  if (backendRes.ok) {
    res.set("Content-Type", "image/png");
    backendRes.body.pipe(res);
  } else {
    res.status(backendRes.status).send();
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
