/* eslint-disable camelcase */
// Routes for messages
const express = require("express");
const router = new express.Router({ mergeParams: true });
const apiRequest = require("../../../helpers/apiRequest");

// GET route, retrieve a page of messages for a given chat id and page number
router.get("/", async (req, res) => {
  const API_ROUTE = "/message/fetch_all";
  const chat_id = req.params.id;
  if (!chat_id) {
    res.status(400).send(new Error("Bad Request"));
  }
  const page = req.query.page || "1";
  const body = { page: page, chat_id: chat_id };
  // Get user account by email and password
  const apiBody = await apiRequest(body, API_ROUTE);
  if (apiBody) {
    // Non empty response body
    let messages = apiBody.data;
    if (apiBody.error || !Array.isArray(messages)) {
      // No messages available
      // Default response of empty array
      messages = [];
    }
    res.send({ messages: messages });
  } else {
    res.status(500).send(new Error("Internal Server Error"));
  }
});

module.exports = router;
