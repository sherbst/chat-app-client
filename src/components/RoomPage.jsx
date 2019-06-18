import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../lib/api';
import Sidebar from './Sidebar';
import Chat from './Chat';

class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        api.joinRoom(this.props.match.params.room);
    }

    logout() {
        // Remove username from session storage
        sessionStorage.removeItem('username');
        // Refresh page
        window.location.reload();
    }

    render() {
        var isUser = api.isUser();
        if(isUser) {
            return (
                <div className="container">
                    <div className="section">
                        <p className="is-italic has-text-right" style={{ marginBottom: '10px', marginRight: '10px' }}>
                            Connected as <strong>{sessionStorage.getItem('username')}.</strong> <a style={{ marginLeft: 10 }} onClick={this.logout}>Log Out</a>
                        </p>
                        <div className="tile is-ancestor">
                            <Sidebar />
                            <Chat />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <Redirect to="/" />
            )
        }
    }
}
 
export default RoomPage;