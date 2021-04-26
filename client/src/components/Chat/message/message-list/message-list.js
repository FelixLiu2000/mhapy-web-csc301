import React from "react";

import Message from "../message-item/message-item";
import "./message-list.css";

const MessageList = (props) => {

  // const chats = props.chats;
  // const specificConvoIndex = props.specificConvo;
  // const allMessages = [];

  // for (chat in chats) {
  //   if (chat === specificConvoIndex) {
  //     allMessages = chat["messages"];
  //   }
  // }

  const messageItems = props.messages.map((message) => {
    return (
      <Message
        key={message.id}
        isMyMessage={message.sender === this.props.app.state.currentUser.id}
        message={message}
        app = {this.props.app}
        users = {this.props.users}
      />
    );
  });

  return <div id="chat-message-list">{messageItems}</div>;
};

export default MessageList;
