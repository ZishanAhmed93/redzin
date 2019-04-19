import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home'
import Subreddit from './components/Subreddit'

import './css/normalize.css';
import './css/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <p>Hello Redzin</p>
      
      <Router>
        <Route exact path="/" exact component={Home} />
        <Route path="/r/:subreddit" component={Subreddit} />
      </Router>
      

      </div>
    );
  }
}

export default App;
