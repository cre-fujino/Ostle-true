import React, { Component } from 'react'
import logo from './Ostle.png'
import './App.css'
import  { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Game from './Game.js'
import Title from './Title.js'

const App = () => (
  <BrowserRouter>
      <div className="App">
      <Route exact path = '/' component ={Title}/>
      <Route path = '/game' component ={Game}/>
     </div>
  </BrowserRouter>
)

export default App;
