import React, { Component } from 'react';
import api from '../lib/api.js'
import { Redirect } from 'react-router-dom';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            error: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit (e) {
        // Stop window reload
        e.preventDefault();
        // Get requested username
        var userNameInput = document.getElementById('username-input');
        var requestedUsername = userNameInput.value;
        // Send to server
        api.requestUsername(requestedUsername, ({ error, username }) => {
            if(error) {
                // Clear input
                userNameInput.value = '';
                this.setState({ error });
            } else {
                // Send to default room
                this.props.history.push('/rooms/default');
            }
        })
    }

    componentDidMount() {
        this.setState({ connected: api.socket.connected });
        api.onConnectionChange((connected) => {
            this.setState({ connected });
        });
    }

    render() {
        // Is user logged in?
        if(api.isUser()) {
            // Yes, redirect them out of the log-in form
            return (
                <Redirect to="/rooms/default" />
            );
        } else {
            return (
                <section className="hero is-warning is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-size-1">Get Started</h1>
                            { this.state.connected ?
                                <form onSubmit={this.onFormSubmit} autoComplete="off">
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <input className="is-large input is-rounded" id="username-input" type="text" placeholder="Pick a username..."/>
                                        </div>
                                        <div className="control">
                                            <button className="button is-large is-rounded" type="submit">Go</button>
                                        </div>
                                    </div>
                                </form>
                                
                            : <p>Loading...</p> }
                            <p className="is-size-7 is-italic" style={{ marginTop: '10px' }}>{ this.state.error }</p>
                        </div>
                    </div>
                </section>
            );
        }
    }
}
 
export default RegisterPage;