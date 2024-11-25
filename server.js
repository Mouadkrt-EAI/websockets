const WebSocket = require('ws');

// Create a new WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Handle connection events
wss.on('connection', (ws) => {
    console.log('New client connected');

    // Handle incoming messages from clients
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Echo the message back to the client
        ws.send(`You said: ${message}`);
    });

    // Send a welcome message to the newly connected client
    ws.send('Welcome to the WebSocket server!');
});

// Log when the server is running
console.log('WebSocket server is running on ws://localhost:8080');