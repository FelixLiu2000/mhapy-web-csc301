import React from "react";

import "./chat-title.css";

class ChatTitle extends React.Component {
  render() {
    let username = "";
    const currentConvo = this.props.currentConvo;
    const ownUsername = this.props.currentUser.username;
    let currentConvoUsername = null;
    if (currentConvo && currentConvo.users.length > 0) {
       currentConvoUsername = currentConvo.users[0].username
      if (currentConvoUsername === ownUsername) {
        currentConvoUsername = currentConvo.users[1].username
      }
      username = currentConvoUsername || "";
    }
    return (
      <div id="chat-title">
        <span>{username}</span>
      </div>
    );
  }
}

export default ChatTitle;
