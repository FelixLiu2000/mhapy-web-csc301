import io from "socket.io-client";
import { v1 as uuid } from "uuid";

// Connect to chat websocket
export const connectChat = (comp) => {
  // socket.io namespace to connect to
  const NAMESPACE = "/api/message";
  const socket = io(NAMESPACE);
  socket.on("connect", () => {
    console.log("[CHAT] Connected");
    comp.setState({ socket: socket });
  });
};

// Send a message through the chat websocket
export const sendMessage = (comp, user, receiverID, message) => {
  const socket = comp.state.socket;
  const chatID = comp.state.currentChatID;
  // Generate UUIDv1 id for message
  const msgID = uuid();
  // JSONify message
  const msg = {
    sender_id: user.id,
    receiver_id: receiverID,
    messageId: msgID,
    sender_name: user.username,
    token: user.token,
    message: message,
    chat_id: chatID,
    message_type: 0,
    img: "",
  };
  // Emit socket event
  socket.emit("new_message", JSON.stringify(msg));
  console.log("[CHAT] Message sent");
  // TODO: Update UI with new message
};

// Get messages from server by page from a given conversation
export const getMessages = (comp, chatID, page) => {
  const url = `/api/chats/${chatID}/messages/?page=${page}`;
  // Create request
  const request = new Request(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // Send request
  fetch(request)
    .then((res) => {
      if (res.ok) {
        res.json().then((body) => {
          // Set messages state
          // FIXME: Change to correct state key
          comp.setState({ messages: body.messages });
        });
      } else {
        if (res.status === 401) {
          console.error(new Error("credentials"));
        } else {
          console.error(new Error("Internal Server Error"));
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// Get chats from server for a given user
export const getChats = (comp, user) => {
  const userID = user.id;
  const url = `/api/users/${userID}/chats`;
  // Create request
  const request = new Request(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // Send request
  fetch(request)
    .then((res) => {
      if (res.ok) {
        res.json().then((chats) => {
          const conversations = {};
          //Parse date strings
          for (const id of Object.keys(chats)) {
            const chat = chats[id];
            chat.lastMessage.dateCreated = new Date(
              chat.lastMessage.dateCreated
            );
            chat.dateCreated = new Date(chat.dateCreated);
            conversations[id] = chat;
          }
          // Set conversations state
          const sortedIDs = Object.keys(conversations).sort((a, b) => {
            const chatADate = conversations[a].lastMessage.dateCreated;
            const chatBDate = conversations[b].lastMessage.dateCreated;
            return chatADate < chatBDate ? 1 : -1;
          });
          comp.setState({
            conversations: conversations || {},
            conversationIDs: sortedIDs || [],
            currentConvoID: sortedIDs[0] || -1,
          });
        });
      } else {
        if (res.status === 401) {
          console.error(new Error("credentials"));
        } else {
          console.error(new Error("Internal Server Error"));
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
