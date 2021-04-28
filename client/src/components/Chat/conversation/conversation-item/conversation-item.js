import React from "react";
import classNames from "classnames";

import "./conversation-item.css";
import { getDateTimeString } from "../../../../actions/chat";

class ConversationItem extends React.Component {
  render() {
    let {
      conversationID,
      conversation,
      isActive,
      onConversationItemSelected,
      currentUser,
    } = this.props;
    const className = classNames("conversation", {
      active: isActive,
    });
    const ownUsername = currentUser.username;
    let sender = {};
    if (conversation.users && conversation.users.length > 0) {
      sender = conversation.users[0];
      if (sender.username === ownUsername) {
        sender = conversation.users[1];
      }
    }
    const lastMessageDate = conversation.lastMessage.dateCreated;
    const userImgPath = sender.img || "";
    const dateCreated = getDateTimeString(lastMessageDate);
    return (
      <div
        className={className}
        onClick={() => onConversationItemSelected(conversationID)}
      >
        <img src={`/api/users/images/?file=${userImgPath}`} alt={""} />
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
