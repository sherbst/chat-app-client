import React from 'react';
import Command from './Command';

export default function Help ({ toggleModal, setModalContent }) {

    function commandsReadMore () {
        setModalContent({
            head: <p className="title">Commands</p>,
            body:
                <>
                    <p>Commands allow you to do things such as send private messages and flip a coin.</p>
                    <p>Commands are invoked by typing an exclamation mark, and then the commands name.</p>
                    <pre>!coin</pre>
                    <p>Some commands have a series of parameters that are seperated by spaces.</p>
                    <pre>!whisper user12947 Hey!</pre>
                    <div className="spacer"></div>
                    <h2 className="subtitle">Commands</h2>
                    <table className="table is-fullwidth">
                        <tbody>
                            <tr>
                                <th>Command</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                            <Command command="coin" description="Randomly chooses between true or false and sends the result to your current room." />
                            <Command command="whisper" parameters={[ 'user', 'message' ]} description="Sends a private message to the specified user." />
                        </tbody>
                    </table>
                </>
        }, () =>  {
            toggleModal(true);
        })
    }

    function textStylingReadMore () {
        setModalContent({
            head: <p className="title">Text Styling</p>,
            body:
                <>
                    <p>Text styling allows you to <strong>bold</strong>, <span style={{ textDecoration: 'underline' }}>underline</span>, <del>strikethrough</del>, and <em>italicize</em> your messages.</p>
                    <p>To style text in your message simply wrap the desired portion in the correct character.</p>
                    <pre>*this text is bold*</pre>
                    <table className="table is-fullwidth">
                        <tbody>
                            <tr>
                                <th>Effect</th>
                                <th>Character</th>
                                <th>Example</th>
                            </tr>
                            <tr>
                                <td>Bold</td>
                                <td>*</td>
                                <td><pre>*bolded text!*</pre></td>
                            </tr>
                            <tr>
                                <td>Strikethrough</td>
                                <td>-</td>
                                <td><pre>-text with a strikethrough!-</pre></td>
                            </tr>
                            <tr>
                                <td>Underline</td>
                                <td>_</td>
                                <td><pre>_underlined text!_</pre></td>
                            </tr>
                            <tr>
                                <td>Italics</td>
                                <td>%</td>
                                <td><pre>%italicized text!%</pre></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Text styling can also be nested.</p>
                    <pre>%*hello*% → <em><strong>hello</strong></em></pre>
                </>
        }, () =>  {
            toggleModal(true);
        })
    }

    return (
        <div className="tile is-child notification is-danger">
            <h1 className="title">Commands</h1>
            <p>
                Commands allow you to do things such as send private messages and flip a coin.&nbsp;
                <a onClick={commandsReadMore}>Read More</a>
            </p>
            <div className="spacer"></div>
            <h1 className="title">Text Styling</h1>
            <p>
                Text styling allows you to <strong>bold</strong>, <span style={{ textDecoration: 'underline' }}>underline</span>, <del>strikethrough</del>, and <em>italicize</em> your messages.&nbsp;
                <a onClick={textStylingReadMore}>Read More</a>
            </p>
        </div>
    )
}