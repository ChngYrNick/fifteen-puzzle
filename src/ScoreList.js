import React, { Component } from 'react';
import Data from './highscores.json';
import crown from './crown.svg';
import './App.css';

export default class ScoreList extends React.Component {

    renderScores() {
        return (
            Data.scores.sort((a, b) => { return a.score - b.score; }).map((item, i) => {
                return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.score}</td>
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