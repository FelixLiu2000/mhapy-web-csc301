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
  getChats,
} from "../../../actions/chat";

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
    currentConvoID: 0,
    conversationContent: <NoConversations />,
  };

  constructor(props) {
    super(props);
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.changeConversation = this.changeConversation.bind(this);
  }

  changeConversation(conversationID) {
    this.setState({
      currentConvoID: conversationID,
    });
  }

  sendNewMessage(textMessage) {
    const currentConvoID = this.state.currentConvoID;
    console.log(currentConvoID);
    const currentConvo = this.state.conversations[currentConvoID];
    console.log(this.state.conversations);
    console.log(this.state.conversations[currentConvoID]);
    const currentMessages = currentConvo.messages;

    console.log(currentMessages);
    currentMessages.unshift({
      "id": 0, // TODO: how to generate message ID?
      "message": textMessage,
      "type": 0,
      "img": " ",
      "dateCreated": "2021-04-26T01:12:47.000Z", // TODO: change to current DateTime
      "sender": this.props.app.state.currentUser.id,
      "receiver": currentConvo.users[0]["id"]
    }); 
    console.log(currentMessages);


    this.setState({
      conversations: {
        ...this.state.conversations,
        [currentConvoID]: {
          ...this.state.conversations[currentConvoID],
          messages: currentMessages,
        },
      },
    });

    console.log(this.state.conversations);

    sendMessage(
      this,
      this.props.app.state.currentUser,
      currentConvo.users[0]["id"],
      textMessage
    );
  }

  componentDidMount() {
    //connectChat(this);
    getChats(this, this.props.app.state.currentUser);
  }

  render() {
    return (
      <div id="chat-container">
        <ConversationSearch />
        <ConversationList
          onConversationItemSelected={this.changeConversation}
          conversations={this.state.conversations}
          conversationIDs={this.state.conversationIDs}
          currentConvoID={this.state.currentConvoID}
        />
        <NewConversation />
        <ChatTitle
          currentConvo={this.state.conversations[this.state.currentConvoID]}
        />
        {Object.keys(this.state.conversations).length > 0 ? (
          <MessageList
            messages={this.state.conversations[this.state.currentConvoID].messages || []} 
            app = {this.props.app}
            users = {this.state.conversations[this.state.currentConvoID].users}
          />
        ) : (
          <NoConversations />
        )}
        <ChatForm onNewMessage={this.sendNewMessage} />
      </div>
    );
  }
}


export default ChatShell;
