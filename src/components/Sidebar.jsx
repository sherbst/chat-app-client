import React from 'react';
import UsersInRoomList from './UsersInRoomList';

export default function Sidebar () {
    return (
        <div className="tile is-4 is-vertical is-parent">
            <UsersInRoomList />
            <div className="tile is-child notification is-danger">
                <p className="title">Rooms</p>
                <p>Feature coming soon...</p>
            </div>
        </div>
    )
}