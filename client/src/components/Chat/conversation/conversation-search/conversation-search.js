import React from "react";

import "./conversation-search.css";

class ChatSearch extends React.Component {
  render() {
    return (
      <div id="search-container">
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default ChatSearch;
