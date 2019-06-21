import React, { Component } from 'react';
import User from './User';
import api from '../lib/api';
import copy from 'copy-to-clipboard';

// Font Awesome
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
        this.onShare = this.onShare.bind(this);
    }

    componentDidMount() {
        api.onRoomActiveUsers((users) => {
            this.setState({ users });
        })
    }

    onShare () {
        copy(window.location.href, {
            message: 'Press #{key} to copy',
        });
        this.props.toggleShareModal();
    }

    render() { 
        return (
            <div className="tile is-child notification is-primary">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h1 className="title">Room</h1>
                        </div>
                        <div className="level-item">
                            <a onClick={this.onShare} className="button is-info is-small is-rounded"><span style={{ marginRight: 10 }}>Share Room</span><FontAwesomeIcon icon={faCopy} /></a>
                        </div>
                    </div>
                </div>
                <p className="subtitle is-size-7">
                    Room: {this.props.roomHandle}
                </p>
                <p><em>{this.state.users.length} users connected.</em></p>
                <div className="scrollable">
                    { this.state.users.map(username => <User key={username} username={username} />) }
                </div>
            </div>
        );
    }
}
 
export default UsersList;