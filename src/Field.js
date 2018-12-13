import React, { Component } from 'react';
import Cell from './Cell';

export default class Field extends React.Component{

    renderCell(i){
        let isActive = true;
        const {squares} = this.props;

        if(!squares[i])isActive = false;

        return(
        <Cell 
        vallue={squares[i]}
        onClick={() => this.props.onClick(i)}
        isActive ={isActive}
        />
        );
    }

    render(){
        return(
            <div>
                <div className = 'board-row'>
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                    {this.renderCell(3)}
                </div>
                <div className = 'board-row'>
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                </div>
                <div className = 'board-row'>
                    {this.renderCell(8)}
                    {this.renderCell(9)}
                    {this.renderCell(10)}
                    {this.renderCell(11)}
                </div>
                <div className = 'board-row'>
                    {this.renderCell(12)}
                    {this.renderCell(13)}
                    {this.renderCell(14)}
                    {this.renderCell(15)}
                </div>
            </div>
        );
    }
}