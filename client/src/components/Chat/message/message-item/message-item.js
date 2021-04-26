import React from "react";

const Message = (props) => {
  let messageClass = "message-row";
  let imageThumbnail = null;

  const receiverName = props.users[1]["username"]

  if (props.isMyMessage) {
    messageClass += " you-message";
  } else {
    messageClass += " other-message";
    imageThumbnail = (
      <img src= " " alt={receiverName} />
    );
  }

  return (
    <div className={messageClass}>
      <div className="message-content">
        {imageThumbnail}
        <div className="message-text">{props.message.message}</div>
        <div className="message-time">{props.message.dateCreated}</div>
      </div>
    </div>
  );
};

export default Message;
