import React from "react";
import { getDateTimeString } from "../../../../actions/chat";

class Message extends React.Component {
  render() {
    let messageClass = "message-row";
    let imageThumbnail = null;

    const senderName = this.props.users[0]["username"];

    if (this.props.isMyMessage) {
      messageClass += " you-message";
    } else {
      messageClass += " other-message";
      imageThumbnail = <img src=" " alt={senderName} />;
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
