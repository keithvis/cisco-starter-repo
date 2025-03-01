import './App.css';
import "./components/Banner"
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
import React from 'react';
import IP from './components/IP';
import Latency from './components/Latency';


 
function App() {
  return (
    <div className="App">
      <Banner name="Sextant" />
      <Exhibit>

        <IP IP="ipv4" ></IP>
        <IP IP="ipv6" ></IP>
        <Latency></Latency>

      </Exhibit>

    </div>
  );
}

export default App;
