import React, { Component } from 'react';
import shuffle from './shuffle';
import switchCells from './switchCells';
import Field from './Field';
import './App.css';
import zeroSearch from './zeroSearch';
import winCheck from './winCheck';
import ShuffleBtn from './ShuffleBtn';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        steps:0,
        squares: shuffle(Array.from(Array(16).keys()))
    };
}


  handleClick(i){
    const {steps,squares} = this.state;

    let newCoord = zeroSearch(squares,i)
    if(!winCheck(squares)){
      if(newCoord !== null){
        this.setState({
          steps: steps + 1,
          squares: switchCells(squares,i,newCoord)
        })
      }
    }
  }

  render() {
    const {steps,squares} = this.state;

    let info = ('Steps: ' + steps);
    let win = ((winCheck(squares)) ? 'You have won!' : '');
    return (
     <div className='game'>
     <div>
       <ShuffleBtn onClick ={() => {this.setState({squares: shuffle(squares),steps: 0})}}/>
     </div>
      <div >
            <Field 
            squares = {squares}
            onClick = {(i) => this.handleClick(i)}
             />
      </div>
      <div>
        <div className='steps'>{info}</div>
        <div className='win'>{win}</div>
      </div>
     </div>
    );
  }
}

export default App;
