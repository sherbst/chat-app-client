import React, { Component } from 'react';
import api from '../lib/api';
import ChatMessage from './ChatMessage';

class ChatMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            roomActiveUsers: []
        }
    }

    componentDidMount() {
        this.adjustScrolling();

        api.onRoomActiveUsers((roomActiveUsers) => {
            if(this.state.roomActiveUsers.length > roomActiveUsers.length) {
                // A user left
                var leftUser = this.state.roomActiveUsers.find(oldUser => {
                    return !roomActiveUsers.find(newUser => newUser === oldUser)
                });
                var message = { message: `${leftUser} left the room.`, date: Date.now(), type: 'server' }
            } else {
                // A user joined
                var joinedUser = roomActiveUsers.find(oldUser => {
                    return !this.state.roomActiveUsers.find(newUser => newUser === oldUser)
                });
                var message = { message: `${joinedUser} joined the room.`, date: Date.now(), type: 'server' }
            }

            this.setState({
                roomActiveUsers,
                messages: this.state.messages.concat(message)
            });
        });

        api.onMessage((message) => {
            console.log(message);
            this.setState({
                messages: this.state.messages.concat(message)
            });
        })
    }

    componentDidUpdate(prevProps, prevState) {
        this.adjustScrolling();
    }

    adjustScrolling () {
        // Automatically scrolls to bottom.
        var elem = document.getElementById('chat');
        elem.scrollTop = elem.scrollHeight;
    }

    render () {
        return (
            <div className="scrollable" id="chat">
                <table className="alternating-table">
                    <tbody>
                        { this.state.messages.map(m => <ChatMessage key={m.message + m.date} message={m} />) }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ChatMessages;