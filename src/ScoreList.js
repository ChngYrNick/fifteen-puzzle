import React, { Component } from 'react';
import crown from './crown.svg';
import './App.css';

export default class ScoreList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            players: []
        };
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

      

      componentDidMount() {
        this.hydrateStateWithLocalStorage();
     }
    
     

    renderScores() {
        const players = [...this.state.players];

        return (
            players.sort((a, b) => { return a.steps - b.steps; }).map((item, i) => {
                return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.steps}</td>
                </tr>
            })
        );
    }

    render() {
        return (
            <div className='score-list'>
            <div className='row'>
                <div className='score-list--text'>Highscores </div>
                <div className='column'><img src ={crown} height='40' width='40'></img></div>
            </div>
                <table className='score-list--table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderScores()}
                    </tbody>
                </table>
            </div>
        );
    }
}