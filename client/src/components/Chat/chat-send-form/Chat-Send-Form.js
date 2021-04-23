import React from "react";

import "./Chat-Send-Form.css";

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMessage: "",
    };
  }

  // on change set textMessage to be whatever is typed in the text field
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name;

    // TODO: onMessageSubmitted

    this.setState({
      [name]: "",
    });
  }

  render() {
    return (
      <form id="chat-form" onSubmit={this.handleSubmit}>
        <img
          src={require("../../../assets/icons/attachment-logo.svg")}
          alt="Add Attachment"
        />
        <input
          type="text"
          placeholder="type a message"
          value={this.state.textMessage}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ChatForm;
