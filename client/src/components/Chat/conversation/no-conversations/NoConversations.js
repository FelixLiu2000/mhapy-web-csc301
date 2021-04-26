import React from "react";
import "./NoConversations.css";

class NoConversations extends React.Component {
  render() {
    return (
      <div id="no-conversation-layout">
        <div id="no-conversation-content">
          <h2>No Conversations</h2>
          <p>Currently you have no conversations.</p>
          <p>To start a new conversation click the plus button.</p>
        </div>
      </div>
    );
  }
}

export default NoConversations;
