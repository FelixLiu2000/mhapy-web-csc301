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

const initialState = {
  conversations: [],
  selectedConversation: {},
};

if (initialState.conversations.length > 0) {
  initialState.selectedConversation = initialState.conversations[0]; //maybe should be based on id?
}

console.log(initialState.selectedConversation);

const conversationContent = <NoConversations />;

class ChatShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialConv: initialState,
      conversationContent: conversationContent,
    };
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.changeConversation = this.changeConversation.bind(this);
  }

  changeConversation(conversationID) {
    const newState = { ...this.state.initialConv };
    newState.selectedConversation = newState.conversations.find(
      (convo) => convo.id === conversationID
    );

    this.setState({
      initialConv: newState,
    });
  }

  sendNewMessage(textMessage) {
    const newState = { ...this.state.initialConv };
    newState.selectedConversation = { ...newState.selectedConversation };

    newState.selectedConversation.messages.unshift({
      imageUrl: null,
      imageAlt: null,
      messageText: textMessage,
      createdAt: "Apr 16", // todo: change to current date time
      isMyMessage: true,
    });

    this.setState({
      initialConv: newState,
    });

    // sendMessage(this, this.props.app.state.currentUser, this.state.selectedConversation.userID, textMessage);
  }

  render() {
    return (
      <div id="chat-container">
        <ConversationSearch />
        <ConversationList
          onConversationItemSelected={this.changeConversation}
          conversations={this.state.initialConv.conversations}
          selectedConversationId={
            this.state.initialConv.selectedConversation.id
          }
        />
        <NewConversation />
        <ChatTitle
          selectedConversation={this.state.initialConv.selectedConversation}
        />
        {this.state.initialConv.conversations.length > 0 ? (
          <MessageList
            messages={this.state.initialConv.selectedConversation.messages}
          />
        ) : (
          <NoConversations />
        )}
        <ChatForm onNewMessage={this.sendNewMessage} />
      </div>
    );
  }

  // componentDidMount() {
  //   connectChat(this);
  //   const allChats = getChats(this, this.props.app.state.currentUser);

  // }
}

// old version

// const ChatShell = () => {
//     return (
//             <div id="chat-container">
//             <ConversationSearch />
//             <ConversationList conversations={conversations} />
//             <NewConversation />
//             <ChatTitle selectedConversation={selectedConversation} />
//             <MessageList messages={messages} />
//             <ChatForm />
//             </div>
//     );
// }

// const mapDispatchToProps = dispatch => ({
//     onMessageSubmitted: messageText => { dispatch(newMessageAdded(messageText));}
// });

export default ChatShell;
