import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home'
import Subreddit from './components/Subreddit'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/r/:subreddit" component={Subreddit} />
      </Router>
      <p>Hello Redzin</p>

      </div>
    );
  }
}

export default App;
