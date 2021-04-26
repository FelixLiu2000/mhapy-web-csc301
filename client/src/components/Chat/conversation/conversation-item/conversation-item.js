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

    const month = (conversation.dateCreated.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = conversation.dateCreated.getDay().toString().padStart(2, "0");
    const hour = conversation.dateCreated
      .getHours()
      .toString()
      .padStart(2, "0");
    const minute = conversation.dateCreated
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
