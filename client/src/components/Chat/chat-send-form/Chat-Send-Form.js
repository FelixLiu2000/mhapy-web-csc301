import React from "react";

import "./Chat-Send-Form.css";

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMessage: "",
    };
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

    console.log(this.state.textMessage);
    // get the textMessage then send to parent component shell
    this.props.onNewMessage(this.state.textMessage);

    this.setState({
      textMessage: "",
    });
  }

  render() {
    return (
      <form id="chat-form" onSubmit={this.handleSubmit}>
        <img src="" alt="Add Attachment" />
        <input
          type="text"
          placeholder="type a message"
          value={this.state.textMessage}
          onChange={(event) => this.handleChange(event)}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ChatForm;
