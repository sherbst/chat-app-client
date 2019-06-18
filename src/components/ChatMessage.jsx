import React from 'react';
import SentTime from './SentTime';

function ChatMessage ({ message }) {

    var newMessage = message.message;

    // var userPattern = /^.*(user:(.*?)) .*$/
    // if(userPattern.test(message.message)) {
    //     let match = userPattern.exec(message.message);
    //     var newMessageSplit = newMessage.split(match[1])
    //     console.log(newMessageSplit)
    //     newMessage = <span>{newMessageSplit[0]}<strong>{ newMessageSplit[1] }</strong>{newMessageSplit[1]}</span>
    // }

    // Type: update, user, whisper
    if(message.type === 'update') {
        var messageTableData = <td><em>{ newMessage }</em></td>
    } else if (message.type === 'user') {
        var messageTableData = <td><strong>{ message.from }: </strong>{ newMessage } <SentTime date={message.date} /></td>
    }

    return (
        <tr className="chat-message">
            { messageTableData }
        </tr>
    )
}

export default ChatMessage;