import React from 'react';
import SentTime from './SentTime';
import styleParser from '../lib/styleParser';

function ChatMessage ({ message }) {

    var newMessage = message.message;

    // Is message parsed as HTML or with style tags (like YT) which in turn will be parsed as HTML;
    if(message.parser === 'style' || !message.parser) {
        newMessage = styleParser(newMessage);
    }

    // Purpose (and icon) of message
    if(message.type === 'server') {
        var messageTableData = <td><em><span className="chat-message" dangerouslySetInnerHTML={{ __html: newMessage }}></span></em></td>
    } else if (message.type === 'user') {
        var messageTableData = <td><strong>{ message.from }: </strong><span className="chat-message" dangerouslySetInnerHTML={{ __html: newMessage }}></span> <SentTime date={message.date} /></td>
    }

    return (
        <tr className="chat-message-row">
            { messageTableData }
        </tr>
    )
}

export default ChatMessage;