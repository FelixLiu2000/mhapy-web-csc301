import React from "react";

import "./chat-title.css";

const ChatTitle = (props) => {
  return (
    <div id="chat-title">
      <span>{props.selectedConversation.title}</span>
      <img alt="Delete Conversation" />
    </div>
  );
};

export default ChatTitle;
