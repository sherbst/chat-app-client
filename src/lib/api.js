import io from 'socket.io-client';
const socket = io(`//${process.env.REACT_APP_SERVER_HOSTNAME}`);

var isUser = false;
var username = '';

var api = {
    socket,

    onConnectionChange (callback) {
        socket.on('connect', () => {
            callback(true);
        });

        socket.on('disconnect', () => {
            callback(false);
        })
    },

    requestUsername (requestedUsername, callback) {
        socket.emit('requestUsername', requestedUsername, (status) => {
            if(!status.error) {
                isUser = true;
                // When the user refreshes any page on the app,
                // they will be logged out, and will have to log in
                // again. Obviously, this is bad. We will persist
                // their username in sessionStorage where we can retrieve
                // after their refresh. (App.jsx)
                sessionStorage.setItem('username', requestedUsername);
            }
            callback(status);
        });
    },

    joinRoom (roomHandle) {
        socket.emit('joinRoom', roomHandle);
    },

    isUser () {
        return isUser;
    },

    onRoomActiveUsers (callback) {
        socket.on('roomActiveUsers', (roomActiveUsers) => {
            console.log(roomActiveUsers);
            callback(roomActiveUsers)
        });
    },

    onMessage (callback) {
        socket.on('message', callback);
    },

    sendMessage (message) {
        socket.send(message);
    },
}

export default api;

// Access from console
window.api = api;