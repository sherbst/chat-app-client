import React from 'react';
import HelpItem from './HelpItem';

export default function Help (props) {
    return (
        <div className="tile is-child notification is-danger">
            <h1 className="title">Commands</h1>
            <p>Commands allow you to do things such as send private messages and pick a random number.</p>
            <div className="spacer"></div>
            <h1 className="title">Text Styling</h1>
            <p>Text styling allows you to <strong>bold</strong>, <span style={{ textDecoration: 'underline' }}>underline</span>, <del>strikethrough</del>, and <em>italicize</em> your messages.</p>
        </div>
    )
}