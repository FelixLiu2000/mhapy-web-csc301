// Routes for chats
const express = require("express");
const router = new express.Router();
const messagesRouter = require("./messages");
const { authMiddleware } = require("../../server");

router.use("/:id/messages", authMiddleware, messagesRouter);
module.exports = router;
