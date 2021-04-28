import io from "socket.io-client";
import { v1 as uuid } from "uuid";

// Connect to chat websocket
export const connectChat = (comp) => {
  // socket.io namespace to connect to
  const NAMESPACE = "/api/message";
  const socket = io(NAMESPACE);
  socket.on("connect", () => {
    socket.on("msgReceive", (data) => {
      const msg = JSON.parse(data);
      // Find conversation tied to message
      const senderID = msg.sender_id;
      const currentConvoID = comp.state.currentConvoID;
      const currentConvo = comp.state.conversations[currentConvoID];
      // If message received is from current convo
      if (currentConvo.users[0].id === senderID ||
        currentConvo.users[1].id === senderID) {
        // Add date stamp
        msg.dateCreated = new Date();
        // Add to rendered messages
        comp.setState({
          currentMessages: [msg, ...comp.state.currentMessages]
        });
      }
      // Refresh chats for current user
      getChats(comp, msg.receiver_id);
    });
    console.log("[CHAT] Connected");
    // Store chat socket in state
    comp.setState({ socket: socket });
  });
};

// Send a message through the chat websocket
// Returns the message object that was sent through the socket
export const sendMessage = (comp, user, receiverID, message) => {
  const socket = comp.state.socket;
  const chatID = comp.state.currentConvoID;
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
    img: ""
  };
  // Emit socket event
  socket.emit("new_message", JSON.stringify(msg));
  console.log("[CHAT] Message sent");
  // Add date stamp
  msg.dateCreated = new Date();
  return msg;
};

// Get messages from server by page from a given conversation
export const getMessages = (comp, user, chatID, page) => {
  const url = `/api/chats/${chatID}/messages/?page=${page}`;
  const socket = comp.state.socket;
  // Join message socket room
  socket.emit("joinChat", JSON.stringify({ chatId: chatID, userId: user }));
  console.log("[CHAT] Joined chat");
  // Create request
  const request = new Request(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  // Send request
  fetch(request)
    .then((res) => {
      if (res.ok) {
        res.json().then((body) => {
          // Check if more messages are available
          const hasMoreMessages = body.messages.length > 0 && body.nextPage;
          // Parse dates
          for (const message of body.messages) {
            message.dateCreated = new Date(message.dateCreated);
          }
          // Set messages state
          if (page > 1) {
            comp.setState((prevState) => ({
              messagePage: page,
              currentMessages: prevState.currentMessages.concat(body.messages),
              hasMoreMessages: hasMoreMessages
            }));
          } else {
            comp.setState(() => ({
              messagePage: page,
              currentMessages: body.messages,
              hasMoreMessages: hasMoreMessages
            }));
          }
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
export const getChats = (comp, userID) => {
  const url = `/api/users/${userID}/chats`;
  // Create request
  const request = new Request(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
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
          const sortedIDs = Object.keys(conversations).sort(
            (a, b) => {
              const chatADate = conversations[a].lastMessage.dateCreated;
              const chatBDate = conversations[b].lastMessage.dateCreated;
              return chatADate < chatBDate ? 1 : -1;
            });
          comp.setState(
            {
              conversations: conversations || {},
              conversationIDs: sortedIDs || []
            },
            () => {
              // If current convo needs to be defined
              if (comp.state.currentConvoID === -1) {
                const initialConvoID = sortedIDs[0] || -1;
                comp.changeConversation(initialConvoID);
              }
            }
          );
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

// Get a formatted date time string for messages and conversations
export const getDateTimeString = (rawDate) => {
  const today = new Date();
  const month = (rawDate.getMonth() + 1).toString().padStart(2, "0");
  const date = rawDate.getDate().toString().padStart(2, "0");
  const minute = rawDate.getMinutes().toString().padStart(2, "0");
  const year = rawDate.getFullYear().toString();
  let hour = rawDate.getHours();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // convert hour '0' to '12'
  let dateTimeString = `${month}/${date} at ${hour}:${minute} ${ampm}`;
  if (
    today.getDate() === rawDate.getDate() &&
    today.getMonth() === rawDate.getMonth() &&
    today.getFullYear() === rawDate.getFullYear()
  ) {
    dateTimeString = `Today at ${hour}:${minute} ${ampm}`;
  } else if (today.getFullYear() !== rawDate.getFullYear()) {
    dateTimeString = `${year}/${month}/${date} at ${hour}:${minute} ${ampm}`;
  }
  return dateTimeString;
};
