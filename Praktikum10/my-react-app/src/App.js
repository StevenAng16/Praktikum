import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./react-bootstrap/Navbar";
import {Data} from './Pages/Data';


/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
}
*/

function App () {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar users={Data}/>}/>
    </Routes>
  </BrowserRouter>
            
        
  );
}

export default App;
