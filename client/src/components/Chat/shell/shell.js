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
    currentConvoID: -1,
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
    const currentConvo = this.state.conversations[currentConvoID];
    const messages = [
      {
        imageUrl: null,
        imageAlt: null,
        messageText: textMessage,
        createdAt: "Apr 16", // todo: change to current date time
        isMyMessage: true,
      },
      ...this.state.conversations[currentConvoID].messages,
    ];

    this.setState({
      conversations: {
        ...this.state.conversations,
        [currentConvoID]: {
          ...this.state.conversations[currentConvoID],
          messages: messages,
        },
      },
    });

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
            messages={
              this.state.conversations[this.state.currentConvoID].messages || []
            }
          />
        ) : (
          <NoConversations />
        )}
        <ChatForm onNewMessage={this.sendNewMessage} />
      </div>
    );
  }
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
