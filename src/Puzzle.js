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
            squares: shuffle(Array.from(Array(16).keys())),
            steps: 0
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
            this.saveStateToLocalStorage();
          }
          
        }
      }

      hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);
    
            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
      }

      saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
          // save to localStorage
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
      }

      componentDidMount() {
        
        this.hydrateStateWithLocalStorage();

        window.addEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
     }
    
     componentWillUnmount() {
      window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
  
      this.saveStateToLocalStorage();
  }

    

      render() {
        const {steps,squares} = this.state;
    
        let info = ('Steps: ' + steps);
        
        return (
          <div>
            
         <div className='game'>
         <div>
         <WinPopOut isWin = {winCheck(squares) } steps = {this.state.steps} 
      onClick ={() => {this.setState({squares: shuffle(squares),steps: 0})}}/>
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