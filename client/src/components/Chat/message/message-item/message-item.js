import React from "react";
import { getDateTimeString } from "../../../../actions/chat";

class Message extends React.Component {
  render() {
    let messageClass = "message-row";
    let imageThumbnail = null;
    const ownUsername = this.props.currentUser.username;
    let sender = null;
    if (this.props.users && this.props.users.length > 0) {
      sender = this.props.users[0];
      if (sender.username === ownUsername) {
        sender = this.props.users[1];
      }
    }
    const senderName = sender["username"];
    const senderImgPath = sender["img"];

    if (this.props.isMyMessage) {
      messageClass += " you-message";
    } else {
      messageClass += " other-message";
      imageThumbnail = (
        <img
          src={`/api/users/images/?file=${senderImgPath}`}
          alt={senderName}
        />
      );
    }
    const rawDate = this.props.message.dateCreated;
    const dateCreated = getDateTimeString(rawDate);

    return (
      <div className={messageClass}>
        <div className="message-content">
          {imageThumbnail}
          <div className="message-text">{this.props.message.message}</div>
          <div className="message-time">{dateCreated}</div>
        </div>
      </div>
    );
  }
}

export default Message;
