import React from "react";

import Message from "../message-item/message-item";
import "./message-list.css";

class MessageList extends React.Component {
  render() {

    const messageItems = this.props.messages.map((message) => {
      return (
        <Message
          key={message.id}
          isMyMessage={message.sender_id === this.props.app.state.currentUser.id}
          message={message}
          app={this.props.app}
          users={this.props.users}
        />
      );
    });

    return <div id="chat-message-list">
              {messageItems}
              <button id="load-button">{ "load more messages" }</button>              
           </div>;
  }
}

export default MessageList;
