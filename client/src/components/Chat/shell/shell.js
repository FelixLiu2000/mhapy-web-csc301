import React from "react";
import ConversationSearch from "../conversation/conversation-search/conversation-search";
import ConversationList from "../conversation/conversation-list/conversation-list";
import NewConversation from "../conversation/new-conversation/new-conversation";
import NoConversations from "../conversation/no-conversations/NoConversations";
import ChatTitle from "../chat-title/chat-title";
import MessageList from "../message/message-list/message-list";
import ChatForm from "../chat-send-form/Chat-Send-Form";
import "./shell.css";
import {
  sendMessage,
  connectChat,
  getMessages,
  getChats
} from "../../../actions/chat";
import { connectSocket } from "../../../actions/user";

// const initialState = {
//   conversations: [],
//   selectedConversation: {},
// };
//
// if (initialState.conversations.length > 0) {
//   initialState.selectedConversation = initialState.conversations[0]; //maybe should be based on id?
// }
//
// console.log(initialState.selectedConversation);

class ChatShell extends React.Component {
  state = {
    conversations: {},
    conversationIDs: [], // most recent at front, oldest at end
    currentConvoID: -1,
    currentMessages: [], // messages for the current conversation
    messagePage: 1,
    hasMoreMessages: false,
    conversationContent: <NoConversations/>,
    socket: null // WebSocket for messages
  };

  constructor(props) {
    super(props);
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.changeConversation = this.changeConversation.bind(this);
  }

  changeConversation(conversationID) {
    this.setState({
      currentConvoID: conversationID
    });
    if (conversationID !== -1) {
      // Get first page of messages
      getMessages(this, conversationID, 1);
    }
  }

  sendNewMessage(textMessage) {
    const currentConvoID = this.state.currentConvoID;
    const currentConvo = this.state.conversations[currentConvoID];
    const currentMessages = [...this.state.currentMessages];
    // Send message to server
    const message = sendMessage(
      this,
      this.props.app.state.currentUser,
      currentConvo.users[0]["id"],
      textMessage
    );
    // Update UI with new message
    currentMessages.unshift(message);

    this.setState({ currentMessages: currentMessages });
  }

  componentDidMount() {
    connectSocket(this.props.app.state.currentUser.id);
    connectChat(this);
    getChats(this, this.props.app.state.currentUser);
  }

  render() {
    return (
      <div id="chat-container">
        <ConversationSearch/>
        <ConversationList
          onConversationItemSelected={this.changeConversation}
          conversations={this.state.conversations}
          conversationIDs={this.state.conversationIDs}
          currentConvoID={this.state.currentConvoID}
        />
        <NewConversation/>
        <ChatTitle
          currentConvo={this.state.conversations[this.state.currentConvoID]}
        />
        {this.state.currentConvoID !== -1 ? (
          <MessageList
            messages={this.state.currentMessages}
            app={this.props.app}
            users={this.state.conversations[this.state.currentConvoID].users}
            showLoadMore={this.state.hasMoreMessages}
            onLoadMore={() => getMessages(
              this,
              this.state.currentConvoID,
              this.state.messagePage + 1
            )}
          />
        ) : (
          <NoConversations/>
        )}
        <ChatForm
          disabled={!this.state.socket}
          onNewMessage={this.sendNewMessage}
        />
      </div>
    );
  }
}


export default ChatShell;
