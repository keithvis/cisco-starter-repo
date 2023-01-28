import Card from './Card';
import { useState } from 'react';
function Latency() {

    
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:55455');
const [rtt, setData] = useState([]);

// Connection opened
socket.addEventListener('open', (event) => {
    socket.send(Date.now());
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server ', event.data);
    setData(Date.now() -event.data);

});


return (
    <span> <Card name="Latency" value={JSON.stringify(rtt)} ></Card></span>

);}

export default Latency