import React from "react";
import { connectSocket } from "../../actions/user";
import { connectChat, sendMessage } from "../../actions/chat";

class Home extends React.Component {
  state = {
    socket: null,
    currentChatID: "6068d78dd9ff6216e4adc8c2"
  }
  componentDidMount() {
    const app = this.props.app
    const userID = app.state.currentUser.id;
    connectSocket(userID);
    // TODO: Remove timeout and move connectChat
    setTimeout(() => connectChat(this), 1500);
  }

  render() {
    const currentUser = this.props.app.state.currentUser;
    if (this.state.socket) {
      sendMessage(this,
        currentUser,
        "6033c284fb3eaa0aacb0eff6",
        "SUCCESS!");
    }
    return (
      <div>
        Home
      </div>
    );
  }
}

export default Home;
