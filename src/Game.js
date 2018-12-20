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
    const status = 'Next player: X'
    return (
        <div>
          <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
            </div>
            <div className="board-row">
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
            </div>
            <div className="board-row">
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
            </div>
            <div className="board-row">
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
              {this.renderSquare( )}
            </div>
            <div className="board-row">
              {this.renderSquare(MyFrame)}
              {this.renderSquare(MyFrame)}
              {this.renderSquare(MyFrame)}
              {this.renderSquare(MyFrame)}
              {this.renderSquare(MyFrame)}
            </div>
          </div>
    )
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="Game">
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

class MyFrame extends React.Component {
  render() {
    return (
      <div className="MyFrame">
        {"■"}
      </div>
    )
  }
}









export default Game;
