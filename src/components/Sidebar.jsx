import React from 'react';
import UsersInRoomList from './UsersInRoomList';
import Help from './Help';

export default function Sidebar ({ toggleShareModal, roomHandle }) {
    return (
        <div className="tile is-4 is-vertical is-parent">
            <UsersInRoomList toggleShareModal={toggleShareModal} roomHandle={roomHandle} />
            <Help />
        </div>
    )
}