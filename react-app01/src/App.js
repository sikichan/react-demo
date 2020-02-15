import React from 'react';
import logo from './logo.svg';
import './App.css';
import XButton from './components/XButton/index'
function App() {
  function handleClick(e) {
    console.log('click...', e.target)
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <XButton handleClick={handleClick}>Button</XButton>

      </header>
    </div>
  );
}

export default App;
