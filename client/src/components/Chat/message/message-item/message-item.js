import React from "react";

class Message extends React.Component {
  render() {
    let messageClass = "message-row";
    let imageThumbnail = null;

    const receiverName = this.props.users[1]["username"];

    if (this.props.isMyMessage) {
      messageClass += " you-message";
    } else {
      messageClass += " other-message";
      imageThumbnail = (
        <img src=" " alt={receiverName}/>
      );
    }

    return (
      <div className={messageClass}>
        <div className="message-content">
          {imageThumbnail}
          <div className="message-text">{this.props.message.message}</div>
          <div className="message-time">{this.props.message.dateCreated}</div>
        </div>
      </div>
    );
  }
}

export default Message;
