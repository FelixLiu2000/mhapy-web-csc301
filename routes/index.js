// API routes
const express = require("express");
const router = new express.Router();
const authRouter = require("./auth");
const chatsRouter = require("./chats");

router.use("/auth", authRouter);
router.use("/chats", chatsRouter);
// Catch-all for /api routes
router.all("/*", (req, res) => {
  res.status(404).send("API Route Not Found");
});

module.exports = router;
