import React from "react";

import ConversationItem from "../conversation-item/conversation-item";
import "./conversation-list.css";

class ConversationList extends React.Component {
  render() {
    let {
      onConversationItemSelected,
      conversations,
      conversationIDs,
      currentConvoID,
      currentUser,
    } = this.props;
    const conversationItems = conversationIDs.map((id) => {
      const conversation = conversations[id];
      return (
        <ConversationItem
          key={id}
          conversationID={id}
          onConversationItemSelected={onConversationItemSelected}
          isActive={id === currentConvoID}
          conversation={conversation}
          currentUser={currentUser}
        />
      );
    });

    return <div id="conversation-list">{conversationItems}</div>;
  }
}

export default ConversationList;
