import React, { Component } from 'react';
import api from '../lib/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onSubmit (e) {
        e.preventDefault();
        var message = document.getElementById('message-input').value;
        api.sendMessage({ message, date: Date.now() });
        document.getElementById('message-input').value = '';
    }

    render() { 
        return (
            <form autoComplete="off" onSubmit={this.onSubmit}>
                <p className="title">Send Message</p>
                <p className="subtitle">Hit <em>Enter</em> to send.</p>
                <div className="field is-grouped">
                    <div className="control is-expanded">
                        <input className="input is-rounded is-warning" id="message-input" type="text" placeholder="Type a message..." />
                    </div>
                    <div className="control is-hidden-tablet">
                        <button type="submit" className="button is-rounded">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default ChatForm;