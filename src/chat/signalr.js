// signalr-client.js

import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:7101/chathub')
    .build();

connection.start()
    .then(() => {
        console.log('SignalR connected');
    })
    .catch(err => console.error('SignalR connection error: ', err));

connection.on('ReceiveMessage', (user, message) => {
    console.log(`${user}: ${message}`);
});

export default connection;
