import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import User from './pages/user'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/users/:id' component={User}/>
        </div>
      </Router>
    );
  }
}
