import React, { Component } from 'react';
import './App.css';
import Puzzle from './Puzzle';
import ScoreList from './ScoreList';

class App extends Component {


  render() {
    return (
      <div>
        <Puzzle />
        <ScoreList />
      </div>
    );
  }
}

export default App;
