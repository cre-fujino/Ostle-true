import React, { Component } from 'react'
import logo from './Ostle.png'
import  { BrowserRouter, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            オス、オトス、トル。
          </p>
          <a
            className="App-link"
            href="../public/Ostle.ico"
            target="_blank"
            rel="noopener noreferrer"
          >
            Game Start
          </a>
        </header>
      </div>
    );
  }
}

export default App;
