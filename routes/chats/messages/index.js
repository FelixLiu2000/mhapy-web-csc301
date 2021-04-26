/* eslint-disable camelcase */
// Routes for messages
const express = require("express");
const router = new express.Router({ mergeParams: true });
const apiRequest = require("../../../helpers/apiRequest");
const getUserChats = require("../../../helpers/getUserChats");

// GET route, retrieve a page of messages for a given chat id and page number
// /api/chats/:id/messages
router.get("/", async (req, res) => {
  const API_ROUTE = "/message/fetch_all";
  const chatID = req.params.id;
  if (!chatID) {
    res.status(400).send(new Error("Bad Request"));
    return;
  }
  // Get all chats associated with this user
  const userChats = await getUserChats(req.session.user);
  let authorizedID = false;
  if (userChats) {
    // Check if requested chat is in user chats
    for (const id of Object.keys(userChats)) {
      if (id === chatID) {
        // ID of requested chat found
        authorizedID = true;
        break;
      }
    }
  }
  // User is not authorized to view messages for this chat
  if (!authorizedID) {
    res.status(401).send("Unauthorized, not a chat member");
    return;
  }
  const page = req.query.page || "1";
  const body = { page: page, chat_id: chatID };
  // Get user account by email and password
  const apiBody = await apiRequest(body, API_ROUTE);
  if (apiBody) {
    // Non empty response body
    const messages = [];
    if (!apiBody.error && Array.isArray(messages)) {
      for (const message of apiBody.data) {
        if (message["isDeleted"] === 0) {
          messages.push({
            id: message["_id"],
            message: message["message"],
            type: message["message_type"],
            img: message["img"],
            // Convert epoch seconds to milliseconds, then to ISO time
            dateCreated: new Date(message["created"] * 1000).toISOString(),
            sender_id: message["sender_id"],
            receiver_id: message["receiver_id"],
          });
        }
      }
    }
    const response = { messages: messages };
    if (apiBody.next) {
      response.nextPage = apiBody.next.page;
    }
    res.send(response);
  } else {
    res.status(500).send(new Error("Internal Server Error"));
  }
});

module.exports = router;
