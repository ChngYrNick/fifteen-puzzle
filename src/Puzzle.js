import React, { Component } from 'react';
import shuffle from './functions/shuffle';
import switchCells from './functions/switchCells';
import Field from './Field';
import './App.css';
import zeroSearch from './functions/zeroSearch';
import winCheck from './functions/winCheck';
import ShuffleBtn from './ShuffleBtn';
import WinPopOut from './WinPopOut';

export default class Puzzle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            steps:0,
            squares: Array.from(Array(16).keys())
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
        
        return (
          <div>
            
         <div className='game'>
         <div>
          <WinPopOut isWin = {winCheck(squares)} steps = {this.state.steps}/>
          </div>
         <div>
           <ShuffleBtn onClick ={() => {this.setState({squares: shuffle(squares),steps: 0})}}/>
         </div>
          <div >
                <Field 
                squares = {squares}
                onClick = {(i) => this.handleClick(i)}
                 />
          </div>
            <div className='steps'>{info}</div>
         </div>
         </div>
        );
      }
}