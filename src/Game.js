import React, { Component } from 'react'
import App from './App.js'
import './Game.css'
import  { BrowserRouter, Route, Link } from 'react-router-dom'

class Square extends React.Component {
  render() {
    return (
      <buttun className= "square">
        {this.props.value}
      </buttun>
    )
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value= {i} />
  }

  render() {
    cosnt status = 'Next player: X'

    return (
        <div>
          <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
            </div>
            <div className="board-row">
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
            </div>
            <div className="board-row">
              {this.renderSquare(10)}
              {this.renderSquare(11)}
              {this.renderSquare(12)}
              {this.renderSquare(13)}
              {this.renderSquare(14)}
            </div>
            <div className="board-row">
              {this.renderSquare(15)}
              {this.renderSquare(16)}
              {this.renderSquare(17)}
              {this.renderSquare(18)}
              {this.renderSquare(19)}
            </div>
            <div className="board-row">
              {this.renderSquare(20)}
              {this.renderSquare(21)}
              {this.renderSquare(22)}
              {this.renderSquare(23)}
              {this.renderSquare(24)}
            </div>
          </div>
        </div>
    )
  }

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }






}




export default Game;