import React, { Component } from 'react'
import Top from './App.js'

function Square(props) {
  return (
    <buttun className= "square" onClick={props.onclick}>
      {props.value}
    </buttun>
  )
}

export default Top;
