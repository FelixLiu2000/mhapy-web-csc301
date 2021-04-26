// API routes
const express = require("express");
const router = new express.Router();
const authRouter = require("./auth");
const chatsRouter = require("./chats");
const usersRouter = require("./users");

router.use("/auth", authRouter);
router.use("/chats", chatsRouter);
router.use("/users", usersRouter);
// Catch-all for /api routes
router.all("/*", (req, res) => {
  res.status(404).send("API Route Not Found");
});

module.exports = router;
