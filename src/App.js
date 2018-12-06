import React, { Component } from 'react'
import logo from './Ostle.png'
import './App.css';
import  { BrowserRouter, Route, Link } from 'react-router-dom'


const Top = () => (
  <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            オス、オトス、トル。
          </p>
          <a
            className="App-link"
            href="../Game.js"
            target="_self"
            rel="noopener noreferrer"
          >
            Game Start
          </a>

       </header>
     </div>
  </BrowserRouter>
)


export default Top;
