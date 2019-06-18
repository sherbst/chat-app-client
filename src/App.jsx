import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/bulma.css'
import './assets/css/App.css';

import NotFound from './components/NotFound';
import RegisterPage from './components/RegisterPage';
import RoomPage from './components/RoomPage';
import api from './lib/api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            connected: false
        }
    }

    componentDidMount() {
        // If the username is set in session storage,
        // Register with that username. (See api.js)
        var username = sessionStorage.getItem('username');
        if(username) {
            api.requestUsername(username, ({ error, username }) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(`Restored username ${username} from sessionStorage.`);
                    this.setState({ username })
                }
            })
        }
        // Subscribe to connect event
        api.onConnectionChange((connected) => {
            this.setState({connected});
        });
    }

    render () {

        var routes = (
            <Router>
                <Switch>
                    <Route exact path="/" component={RegisterPage} />
                    <Route exact path="/rooms/:room" component={RoomPage} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </Router>
        );

        var loading = (
            <div className="section">
                <div className="container">
                    <p>Loading...</p>
                </div>
            </div>
        )

        if(sessionStorage.getItem('username')) {
            if(this.state.connected && this.state.username) {
                return routes;
            } else {
                return loading;
            }
        } else {
            if(this.state.connected) {
                return routes;
            } else {
                return loading;
            }
        }
    }
}

export default App;