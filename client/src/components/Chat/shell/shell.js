import React from "react";
import ConversationSearch from "../conversation/conversation-search/conversation-search";
import ConversationList from "../conversation/conversation-list/conversation-list";
import NewConversation from "../conversation/new-conversation/new-conversation";
import NoConversations from "../conversation/no-conversations/NoConversations";
import ChatTitle from "../chat-title/chat-title";
import MessageList from "../message/message-list/message-list";
import ChatForm from "../chat-send-form/Chat-Send-Form";
import "./shell.css";
import {sendMessage, connectChat, getMessages, getChats} from "../../../actions/chat";

// const initialState = {
//   conversations: [],
//   selectedConversation: {},
// };

// if (initialState.conversations.length > 0) {
//   initialState.selectedConversation = initialState.conversations[0]; //maybe should be based on id?
// }


// TODO: check the length of the conversation list (allChats)? for selectedConversation
const conversationContent = <NoConversations />;

class ChatShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: allChats,
      // conversationContent: conversationContent, unnecessary
      specificConvo: 0,
    };
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.changeConversation = this.changeConversation.bind(this);
  }

  changeConversation(conversationID) {
    const newState = this.state.chats;
    if (newState.hasOwnProperty(conversationID)) {
      this.setState({
        specificConvo: conversationID,
      });    
    }
  }

  sendNewMessage(textMessage) {
    const newState = { ...this.state.chats };
    newState.selectedConversation = { ...newState.selectedConversation };

    newState.selectedConversation.messages.unshift({
      imageUrl: null,
      imageAlt: null,
      messageText: textMessage,
      createdAt: "Apr 16", // todo: change to current date time
      isMyMessage: true,
    });

    this.setState({
      chats: newState,
    });

    sendMessage(this, this.props.app.state.currentUser, this.state.selectedConversation.userID, textMessage);

  }

  render() {
    return (
      <div id="chat-container">
        <ConversationSearch />
        <ConversationList
          onConversationItemSelected={this.changeConversation}
          conversations={this.state.chats.conversations}
          selectedConversationId={
            this.state.chats.selectedConversation.id
          }
        />
        <NewConversation />
        <ChatTitle
          selectedConversation={this.state.chats.selectedConversation}
        />
        {this.state.chats.conversations.length > 0 ? (
          <MessageList
            conversations={this.state}
          />
        ) : (
          <NoConversations />
        )}
        <ChatForm onNewMessage={this.sendNewMessage} />
      </div>
    );
  }

  componentDidMount() {
    connectChat(this);
    const allChats = getChats(this, this.props.app.state.currentUser);

  }

}


export default ChatShell;
