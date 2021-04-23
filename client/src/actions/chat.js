import io from "socket.io-client";
import { v1 as uuid } from 'uuid';

// Connect to chat websocket
export const connectChat = (form) => {
    // socket.io namespace to connect to
    const NAMESPACE = "/api/message";
    const socket = io(NAMESPACE);
    socket.on("connect", () => {
        console.log("[CHAT] Connected");
        form.setState({ socket: socket });
    });
};

// Send a message through the chat websocket
export const sendMessage = (form, user, receiverID, message) => {
    const socket = form.state.socket;
    const chatID = form.state.currentChatID;
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
        img: ''
    };
    // Emit socket event
    socket.emit('new_message', JSON.stringify(msg));
    console.log("[CHAT] Message sent");
    // TODO: Update UI with new message
};
