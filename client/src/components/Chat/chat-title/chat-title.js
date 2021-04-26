import React from "react";

import "./chat-title.css";

class ChatTitle extends React.Component {
  render() {
    let username = "";
    const currentConvo = this.props.currentConvo;
    if (currentConvo && currentConvo.users[0]) {
      username = currentConvo.users[0].username || "";
    }
    return (
      <div id="chat-title">
        <span>{username}</span>
      </div>
    );
  }
}

export default ChatTitle;
