import React from 'react';

import './Chat-Send-Form.css';

function ChatForm() {
    return (
        <div id="chat-form">
            <img src={require("../../../assets/icons/attachment-logo.svg")} alt="Add Attachment" />
            <input type="text" placeholder="type a message" />
        </div> 
    );
}

export default ChatForm;