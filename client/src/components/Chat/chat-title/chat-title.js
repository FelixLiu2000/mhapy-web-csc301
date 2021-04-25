import React from "react";

import "./chat-title.css";

const ChatTitle = (props) => {
  return (
    <div id="chat-title">
      <span>{props.selectedConversation.title}</span>
    </div>
  );
};

export default ChatTitle;
