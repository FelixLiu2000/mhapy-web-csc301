/* eslint-disable camelcase */

// Return cleaned user data
const cleanUserData = (rawUserData) => {
  return {
    id: rawUserData["_id"],
    username: rawUserData["user_name"],
    email: rawUserData["email"],
    bio: rawUserData["bio"],
    img: rawUserData["img"],
    token: rawUserData["token"],
    dateCreated: new Date(rawUserData["created"]).toISOString(),
  };
};

module.exports = cleanUserData;
