import React from "react";

import "./Chat-Send-Form.css";
import AttachFileIcon from "@material-ui/icons/AttachFile";

class ChatForm extends React.Component {
  state = {
    textMessage: "",
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // on change set textMessage to be whatever is typed in the text field
  handleChange = (event) => {
    const value = event.target.value;
    // const name = event.target.name;
    this.setState({
      textMessage: value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    // get the textMessage then send to parent component shell
    this.props.onNewMessage(this.state.textMessage);

    this.setState({
      textMessage: "",
    });
  }

  render() {
    return (
      <form id="chat-form" onSubmit={this.handleSubmit}>
        <AttachFileIcon id={"chat-form__attachment"} />
        <input
          type="text"
          placeholder="type a message"
          value={this.state.textMessage}
          onChange={(event) => this.handleChange(event)}
        />
        <button id="send-button">Send</button>
      </form>
    );
  }
}

export default ChatForm;
