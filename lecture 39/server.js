const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 3000 });

wsServer.on('connection', (socket) => {
    console.log('Client connected');  
    
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        socket.send(`message: ${message}`);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    })

    socket.on('error', (error) => {
        console.error(`WebSocket error: ${error}`);
    })

})