import React from 'react';
import SentTime from './SentTime';
import styleParser from '../lib/styleParser';

// Font Awesome
import { faBullhorn, faExclamation, faShare, faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from '../lib/api';

function ChatMessage ({ message }) {

    var newMessage = message.message;

    // Is message parsed as HTML or with style tags (like YT) which in turn will be parsed as HTML;
    if(message.parser === 'style' || !message.parser) {
        newMessage = styleParser(newMessage);
    }

    // Purpose (and icon) of message
    var messageIcon;
    switch(message.type) {
        case 'server':
            var messageTableData = <em><span className="chat-message" dangerouslySetInnerHTML={{ __html: newMessage }}></span></em>
            var messageIcon = faBullhorn
            break;
        case 'command-response':
            var messageTableData = <em><span className="chat-message" dangerouslySetInnerHTML={{ __html: newMessage }}></span></em>
            var messageIcon = faExclamation;
            break;
        case 'whisper':
            var messageTableData = <em><span className="chat-message" dangerouslySetInnerHTML={{ __html: newMessage }}></span></em>
            // Sending or recieving?
            var messageIcon = message.from === api.getUsername() ? faShare : faReply;
            break;
        case 'user':
            var messageTableData = (
                <>
                    <strong>{ message.from }: </strong><span className="chat-message" dangerouslySetInnerHTML={{ __html: newMessage }}></span> <SentTime date={message.date} />
                </>
            );
            break;
    }

    return (
        <tr className="chat-message-row">
            <td className="chat-message-icon"><FontAwesomeIcon icon={messageIcon} size="xs" /></td>
            <td>{ messageTableData }</td>
        </tr>
    )
}

export default ChatMessage;