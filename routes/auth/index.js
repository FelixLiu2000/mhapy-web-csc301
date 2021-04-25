/* eslint-disable camelcase */
// Routes for user authentication
const express = require("express");
const router = new express.Router();
const apiRequest = require("../../helpers/apiRequest");

// POST route, login user
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
      // Clean user data
      const userData = {
        id: apiBody.data["_id"],
        username: apiBody.data["user_name"],
        email: apiBody.data["email"],
        bio: apiBody.data["bio"],
        img: apiBody.data["img"],
        token: apiBody.data["token"],
        created: apiBody.data["created"],
      };
      req.session.user = userData.id;
      req.session.save();
      res.send(userData);
    }
  } else {
    res.status(500).send(new Error("Internal Server Error"));
  }
});

// POST route, logout user
router.post("/logout", (req, res) => {
  let success = true;
  if (req.session) {
<<<<<<< HEAD
    req.session.destroy((error) => {
      if (error) {
        // Logout failed
        res.status(500).send("Internal Server Error");
        success = false;
      }
    });
=======
    // Destroy the session
    try {
      req.session = null;
    } catch {
      success = false;
    }
>>>>>>> 6adb7c23bc29200e687421b36088e8ce48631b76
  }
  // Logout succeeded or session not found
  if (success) {
    res.send();
<<<<<<< HEAD
=======
  } else {
    res.status(500).send("Internal Server Error");
>>>>>>> 6adb7c23bc29200e687421b36088e8ce48631b76
  }
});

module.exports = router;
