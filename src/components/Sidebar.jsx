import React from 'react';
import UsersInRoomList from './UsersInRoomList';
import Help from './Help';

export default function Sidebar ({ toggleModal, setModalContent, roomHandle }) {
    return (
        <div className="tile is-4 is-vertical is-parent is-hidden-mobile">
            <UsersInRoomList toggleModal={toggleModal} setModalContent={setModalContent} roomHandle={roomHandle} />
            <Help toggleModal={toggleModal} setModalContent={setModalContent} />
        </div>
    )
}