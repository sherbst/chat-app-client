import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../lib/api';
import Sidebar from './Sidebar';
import Chat from './Chat';

class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false
        }
        this.toggleModal = this.toggleModal.bind(this);
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

    toggleModal () {
        this.setState({ modalActive: !this.state.modalActive })
    }

    render() {
        window.toggleModal = this.toggleModal;
        var isUser = api.isUser();
        if(isUser) {
            return (
                <>
                <div className={`modal ${this.state.modalActive ? 'is-active' : ''}`}>
                    <div onClick={this.toggleModal} className="modal-background"></div>
                    <div className="modal-card">
                        <div className="modal-card-head">
                            <h1 className="title">Share Room</h1>
                        </div>
                        <div className="modal-card-body">
                            <p><strong>The link to this room has been copied to your clipboard.</strong> You can give this link to anyone to allow them to join the chat.</p>
                            <p>Otherwise, you can copy the link below manually.</p>
                            <p><strong>{ window.location.href }</strong></p>
                        </div>
                        <div className="modal-card-foot">
                            <a onClick={this.toggleModal} className="button">Close</a>
                        </div>
                    </div>
                    <div onClick={this.toggleModal} className="modal-close is-large"></div>
                </div>
                
                <div className="container">
                    <div className="section">
                        <p className="is-italic has-text-right" style={{ marginBottom: '10px', marginRight: '10px' }}>
                            Connected as <strong>{sessionStorage.getItem('username')}.</strong> <a style={{ marginLeft: 10 }} onClick={this.logout}>Log Out</a>
                        </p>
                        <div className="tile is-ancestor">
                            <Sidebar toggleShareModal={this.toggleModal} roomHandle={this.props.match.params.room}/>
                            <Chat />
                        </div>
                    </div>
                </div>
                </>
            );
        } else {
            return (
                <Redirect to="/" />
            )
        }
    }
}
 
export default RoomPage;