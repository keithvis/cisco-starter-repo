import './App.css';
import "./components/Banner"
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      <Banner name="Sextant"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
