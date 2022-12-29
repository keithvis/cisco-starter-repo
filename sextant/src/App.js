import './App.css';
import "./components/Banner"
import Banner from './components/Banner';
import Card from './components/Card';
import Exhibit from './components/Exhibit';
import React from 'react';


 
function App() {
  return (
    <div className="App">
      <Banner name="Sextant" />
      <Exhibit>
        <Card name="ip" value="1.1.1.1.1" ></Card>
        <Card name="latency" value="1000 nanoseconds" ></Card>
      </Exhibit>


    </div>
  );
}

export default App;
