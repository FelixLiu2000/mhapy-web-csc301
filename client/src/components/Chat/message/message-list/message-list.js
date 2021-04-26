import React from "react";

import Message from "../message-item/message-item";
import "./message-list.css";

const MessageList = (props) => {

  const chats = props.chats;
  const specificConvoIndex = props.specificConvo;
  const allMessages = [];

  for (chat in chats) {
    if (chat === specificConvoIndex) {
      allMessages = chat["messages"];
    }
  }

  const messageItems = allMessages.map((message, index) => {
    return (
      <Message
        key={index}
        isMyMessage={message.isMyMessage}
        message={message}
      />
    );
  });

  return <div id="chat-message-list">{messageItems}</div>;
};

export default MessageList;
