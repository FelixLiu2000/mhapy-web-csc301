import React from "react";
import classNames from "classnames";

import "./conversation-item.css";

class ConversationItem extends React.Component {
  render() {
    let {
      conversationID,
      conversation,
      isActive,
      onConversationItemSelected,
    } = this.props;
    const className = classNames("conversation", {
      active: isActive,
    });
    const lastMessageDate = conversation.lastMessage.dateCreated;
    const month = (lastMessageDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = lastMessageDate.getDay().toString().padStart(2, "0");
    const hour = lastMessageDate
      .getHours()
      .toString()
      .padStart(2, "0");
    const minute = lastMessageDate
      .getMinutes()
      .toString()
      .padStart(2, "0");
    const dateCreated = `${month}/${day} at ${hour}:${minute}`;
    return (
      <div
        className={className}
        onClick={() => onConversationItemSelected(conversationID)}
      >
        <img src={conversation.img} alt={""} />
        <div className="title-text">{conversation.users[0].username}</div>
        <div className="created-date">{dateCreated}</div>
        <div className="conversation-message">
          {conversation.lastMessage.message}
        </div>
      </div>
    );
  }
}

export default ConversationItem;
