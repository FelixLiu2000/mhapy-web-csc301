/* eslint-disable camelcase */
const apiRequest = require("./apiRequest");

// Retrieve chats associated with a given user id
const getUserChats = async (userID) => {
  const API_ROUTE = "/conversions/getUserChats";
  const body = { user_id: userID };
  // Get user account by email and password
  const apiBody = await apiRequest(body, API_ROUTE);
  if (apiBody) {
    // Non empty response body
    // Chats to return in response
    const resChats = {};
    if (!apiBody.error && !apiBody.data.error) {
      // API body data does not contain error, create response body
      const rawChats = apiBody.data.data;
      for (const chat of rawChats) {
        // The last message sent in this chat
        const lastMessage = {
          message: chat["lastMessage"]["message"],
          seenBy: chat["lastMessage"]["users_see_message"],
          dateCreated: chat["updatedAt"], // same time as when chat was last updated
        };
        // The users added to this chat
        const users = [];
        // Filter out unneeded user fields
        for (const user of chat["users"]) {
          users.push({
            id: user["_id"],
            img: user["img"],
            username: user["user_name"],
          });
        }
        const chatID = chat["_id"];
        const dateCreated = new Date(chat["createdAt"]).toISOString();
        // NOTE: If needed, include "onLineUsersId" field here
        resChats[chatID] = {
          lastMessage: lastMessage,
          users: users,
          dateCreated: dateCreated,
        };
      }
    }
    return resChats;
  }
  return null;
};

module.exports = getUserChats;
