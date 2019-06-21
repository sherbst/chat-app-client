import React from 'react';

export default function Help (props) {
    return (
        <div className="tile is-child notification is-danger">
            <h1 className="title">Commands</h1>
            <div className="scrollable">
                <p><em>!whisper &lt;username&gt; &lt;message&gt;</em> - sends a private message to the specified user.</p>
                <p><em>!coin</em> - Flips a coin.</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}