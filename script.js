// Define the function to connect to the server
function connectToServer() {
    // Create a new WebSocket instance
    const socket = new WebSocket('ws://194.247.187.94:35565');

    // Handle the connection opening
    socket.onopen = () => {
        console.log('Connected to the server');

        // Encode the message "cnt" in UTF-8 and send it to the server
        const encoder = new TextEncoder();
        const message = encoder.encode('cnt');
        socket.send(message);
        console.log('UTF-8 encoded message sent: cnt');
    };

    // Handle messages received from the server
    socket.onmessage = (event) => {
        console.log('Message received from server:', event.data);

        // Process the received message (if needed, add more logic here)
        // For example: Update your webpage with the received text
        document.getElementById('serverResponse').textContent = event.data;
    };

    // Handle any errors
    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    // Handle the connection closing
    socket.onclose = (event) => {
        console.log('Connection closed:', event.reason);
    };
}

/* Ensure there is an element with the ID "serverResponse" in your HTML to display the response. */
