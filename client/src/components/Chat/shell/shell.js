import React from "react";
import ConversationSearch from "../conversation/conversation-search/conversation-search";
import ConversationList from "../conversation/conversation-list/conversation-list";
import NewConversation from "../conversation/new-conversation/new-conversation";
import ChatTitle from "../chat-title/chat-title";
import MessageList from "../message/message-list/message-list";
import ChatForm from "../chat-send-form/Chat-Send-Form";
import {
  conversations,
  selectedConversation,
} from "../../../sample-data/conversations";
import { messages } from "../../../sample-data/messages";

import "./shell.css";

const ChatShell = () => {
  return (
    <div id="chat-container">
      <ConversationSearch />
      <ConversationList conversations={conversations} />
      <NewConversation />
      <ChatTitle selectedConversation={selectedConversation} />
      <MessageList messages={messages} />
      <ChatForm />
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//     onMessageSubmitted: messageText => { dispatch(newMessageAdded(messageText));}
// });

export default ChatShell;
