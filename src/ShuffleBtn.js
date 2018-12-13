import React, { Component } from 'react';

export default class ShuffleBtn extends React.Component{
    render(){
        return(
            <button className='btn' onClick={() => this.props.onClick()}>Reset</button>
        );
    }
}