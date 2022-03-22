//import logo from './logo.svg';
import './App.css';
import React from'react';

import Navbar from './navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import NoPage from './pages/NoPage';

/*
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
  return (
    <BrowserRouter>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" exact element={<About />} />
        <Route path="/about/about-app" exact element={<AboutApp />} />
        <Route path="/about/about-author" exact element={<AboutAuthor />} />
        <Route path="*" exact element={<NoPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
