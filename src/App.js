import React, { Component } from 'react'
import logo from './Ostle.png'
import './App.css'
import  { BrowserRouter, Route, Link } from 'react-router-dom'
import main from './Game.js'

const App = () => (
  <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            オス、オトス、トル。
          </p>

           <Link to = '/game'>Game Start</Link>

         <Route path = '/game' Component = {Game} />

       </header>
     </div>
  </BrowserRouter>
)


const Game = () =>(
  <div>
     <h2>Game</h2>
  </div>


)


export default App;
