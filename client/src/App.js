import React, { Component } from 'react';
import NewsScrapper from './components/newsScraper.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Rishikesh
        <NewsScrapper/>
      </div>
    );
  }
}

export default App;
