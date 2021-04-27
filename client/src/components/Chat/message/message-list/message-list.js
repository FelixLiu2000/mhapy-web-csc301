import React from "react";

import Message from "../message-item/message-item";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./message-list.css";

class MessageList extends React.Component {
  render() {
    const messageItems = this.props.messages.map((message) => {
      return (
        <Message
          key={message.id}
          isMyMessage={
            message.sender_id === this.props.app.state.currentUser.id
          }
          message={message}
          app={this.props.app}
          users={this.props.users}
        />
      );
    });

    return (
      <div id="chat-message-list">
        {messageItems}
        {this.props.showLoadMore && messageItems.length > 0 ? (
          <button id="load-button" onClick={this.props.onLoadMore}>
            {"load more messages"}
          </button>
        ) : messageItems.length === 0 ? (
          <CircularProgress
            id={"message-loading"}
            color={"primary"}
            size={32}
          />
        ) : null}
      </div>
    );
  }
}

export default MessageList;
