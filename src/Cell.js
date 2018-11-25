import React, { Component } from 'react';

export default class Cell extends React.Component{

    render(){
        let className = 'square';
        if(!this.props.isActive) className = 'square-inactive';
        return(
            <button className={className} onClick = {() => this.props.onClick()}>{this.props.vallue}</button>
        );
    }
}