import React, { Component } from 'react';
import Data from './highscores.json';
import { Animated } from "react-animated-css";

export default class WinPopOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            score: 0
        };

        this.onPlayerChange = this.onPlayerChange.bind(this);
    }

    onPlayerChange(event) {
        this.setState({ player: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const {name,score} = this.state;
        Data.scores.push(JSON.stringify({name,score},null,2));
    }

    componentDidMount(){
        this.setState({steps: this.props.steps});
    }


    render() {

        if (this.props.isWin) {
            return (
                <Animated className='win-pop-out' animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                    <div className = 'win-pop-out--text'> 
                        You won!
                    </div>
                    <div>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <p><label > Enter your name <input className='win-pop-out--form--input' type="text" name="player" value={this.state.player}
                                onChange={this.onPlayerChange} /></label></p>
                            <p><input className='win-pop-out--form--button' type="submit" value="Submit" /></p>
                        </form>
                    </div>
                </Animated>

            );
        } else {
            return (
                <div></div>
            );
        }
    }
}