import React, { Component } from 'react'
import logo from './Ostle.png'
import './Title.css'
import  { BrowserRouter, Route, Link } from 'react-router-dom'
import Game from './Game.js'

class Title extends React.Component {
  render () {
    return(
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            オス、オトス、トル。
          </p>
        <Link to = '/game'>Game Start</Link>
      </div>
    )
  }
}

export default Title;
