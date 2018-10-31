import ReactDOM from 'react-dom'
import React from 'react'
import {hot} from 'react-hot-loader'
import App from './App'

export default hot(module)(
  ReactDOM.render(<App />, document.getElementById('app'))
)

function greet(name: string) {
  console.log(name)
}

greet('hello')
