import React from 'react';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

function Chat (props) {
    return (
        <div className="chat-container tile is-8 is-parent">
            <div className="tile is-child notification is-warning">
                <p className="title">Chat</p>
                <ChatMessages />
                <ChatForm />
            </div>
        </div>
    );
}

export default Chat;