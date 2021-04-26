/* eslint-disable camelcase */
// Routes for users
const express = require("express");
const router = new express.Router();
const { authMiddleware } = require("../../server");
const getUserChats = require("../../helpers/getUserChats");

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

module.exports = router;
