import React, { Component } from 'react';
import User from './User';
import api from '../lib/api';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        api.onRoomActiveUsers((users) => {
            this.setState({ users });
        })
    }

    render() { 
        return (
            <div className="tile is-child notification is-primary">
                <p className="title">Users</p>
                <p><em>{this.state.users.length} users connected.</em></p>
                { this.state.users.map(username => <User key={username} username={username} />) }
            </div>
        );
    }
}
 
export default UsersList;