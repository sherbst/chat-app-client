import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../lib/api';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Modal from './Modal';

class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            modalContent: {}
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.setModalContent = this.setModalContent.bind(this);
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
        this.setState({ modalActive: !this.state.modalActive });
    }

    setModalContent (content, cb) {
        this.setState({ modalContent: content }, cb);
    }

    render() {
        window.toggleModal = this.toggleModal;
        var isUser = api.isUser();
        if(isUser) {
            return (
                <>
                <Modal 
                    {...this.state.modalContent}
                    active={this.state.modalActive}
                    toggleActive={this.toggleModal}
                />
                
                <div className="container">
                    <div className="section">
                        <p className="is-italic has-text-right" style={{ marginBottom: '10px', marginRight: '10px' }}>
                            Connected as <strong>{sessionStorage.getItem('username')}.</strong> <a style={{ marginLeft: 10 }} onClick={this.logout}>Log Out</a>
                        </p>
                        <div className="tile is-ancestor">
                            <Sidebar toggleModal={this.toggleModal} setModalContent={this.setModalContent} roomHandle={this.props.match.params.room}/>
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