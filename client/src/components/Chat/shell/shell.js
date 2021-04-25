import React from "react";
import ConversationSearch from "../conversation/conversation-search/conversation-search";
import ConversationList from "../conversation/conversation-list/conversation-list";
import NewConversation from "../conversation/new-conversation/new-conversation";
import ChatTitle from "../chat-title/chat-title";
import MessageList from "../message/message-list/message-list";
import ChatForm from "../chat-send-form/Chat-Send-Form";
import "./shell.css";

const initialState = {
  conversations: [
    {
      id: "1",
      imageUrl: "",
      imageAlt: "Daryl Duckmanton",
      title: "Daryl Duckmanton",
      createdAt: "Apr 16",
      latestMessageText: "This is a message",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Ok then",
          createdAt: "Apr 16",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Daryl Duckmanton",
          messageText: `
                        Yeah I think it's best we do that. Otherwise things won't work well at all. 
                        I'm adding more text here to test the sizing of the speech bubble and the 
                        wrapping of it too.
                    `,
          createdAt: "Apr 16",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Maybe we can use Jim's studio.",
          createdAt: "Apr 15",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Daryl Duckmanton",
          messageText: `
                        All I know is where I live it's too hard
                        to record because of all the street noise.
                    `,
          createdAt: "Apr 15",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: `
                        Well we need to work out sometime soon where
                        we really want to record our video course.
                    `,
          createdAt: "Apr 15",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Daryl Duckmanton",
          messageText: `
                        I'm just in the process of finishing off the
                        last pieces of material for the course.
                    `,
          createdAt: "Apr 15",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "How's it going?",
          createdAt: "Apr 13",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Daryl Duckmanton",
          messageText: " Hey mate what's up?",
          createdAt: "Apr 13",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hey Daryl?",
          createdAt: "Apr 13",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "2",
      imageUrl: "",
      imageAlt: "Kim O'Neil",
      title: "Kim O'Neil",
      createdAt: "Oct 20",
      latestMessageText: "Ok fair enough. Well good talking to you.",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Ok fair enough. Well good talking to you.",
          createdAt: "Oct 20",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Kim O'Neil",
          messageText: `
                        Not sure exactly yet. It will be next year sometime. Probably late.
                    `,
          createdAt: "Oct 20",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Yeah I know. But oh well. So when is the big date?",
          createdAt: "Oct 19",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Kim O'Neil",
          messageText: `
                        Well I know you like doing that stuff. But honestly I think
                        you are already really talented. It's a shame you haven't found
                        what you are looking for yet.
                    `,
          createdAt: "Oct 19",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: `
                        I'm doing ok. Just working on building some applications to
                        bulk up my resume, so I can get a better job.
                    `,
          createdAt: "Oct 19",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Kim O'Neil",
          messageText: `
                        I've just been really busy at work myself, looking to get
                        married sometime next year too. How are you going?
                    `,
          createdAt: "Oct 19",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Yes it has been a little while",
          createdAt: "Oct 19",
          isMyMessage: true,
        },
        {
          imageUrl: "",
          imageAlt: "Kim O'Neil",
          messageText: "Hey!!!! Have not spoken to you for a while",
          createdAt: "Oct 19",
          isMyMessage: false,
        },
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi Kim?",
          createdAt: "Oct 19",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "3",
      imageUrl: "",
      imageAlt: "John Anderson",
      title: "John Anderson",
      createdAt: "1 week ago",
      latestMessageText: "Yes I love how Python does that",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi",
          createdAt: "1 week ago",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "4",
      imageUrl: "",
      imageAlt: "Ben Smith",
      title: "Ben Smith",
      createdAt: "2:49 PM",
      latestMessageText: "Yeah Miami Heat are done",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi",
          createdAt: "2:49",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "5",
      imageUrl: "",
      imageAlt: "Douglas Johannasen",
      title: "Douglas Johannasen",
      createdAt: "6:14 PM",
      latestMessageText: "No it does not",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi",
          createdAt: "6:14 PM",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "6",
      imageUrl: "",
      imageAlt: "Jacob Manly",
      title: "Jacob Manly",
      createdAt: "3 secs ago",
      latestMessageText: "Just be very careful doing that",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi",
          createdAt: "3 secs ago",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "7",
      imageUrl: "",
      imageAlt: "Stacey Wilson",
      title: "Stacey Wilson",
      createdAt: "30 mins ago",
      latestMessageText: "Awesome!!! Congratulations!!!!",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi",
          createdAt: "30 mins ago",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "8",
      imageUrl: "",
      imageAlt: "Stan George",
      title: "Stan George",
      createdAt: "1 week ago",
      latestMessageText: "Good job",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi",
          createdAt: "1 week ago",
          isMyMessage: true,
        },
      ],
    },
    {
      id: "9",
      imageUrl: "",
      imageAlt: "Sarah Momes",
      title: "Sarah Momes",
      createdAt: "1 year ago",
      latestMessageText: "Thank you. I appreciate that.",
      messages: [
        {
          imageUrl: null,
          imageAlt: null,
          messageText: "Hi",
          createdAt: "1 year ago",
          isMyMessage: true,
        },
      ],
    },
  ],
  selectedConversation: {},
};

initialState.selectedConversation = initialState.conversations[0]; //maybe should be based on id?

class ChatShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialConv: initialState,
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
    // console.log(textMessage);
    // console.log(newState);
    // console.log(newState.selectedConversation);

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
    // console.log(this.state.initialConv);
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
        <MessageList
          messages={this.state.initialConv.selectedConversation.messages}
        />
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
