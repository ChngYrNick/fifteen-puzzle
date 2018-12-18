import React, { Component } from 'react';
import { Animated } from "react-animated-css";

export default class WinPopOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            steps: 0,
            players: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addPlayer() {
        
        const newPlayer = {
          name: this.state.name,
          steps: this.state.steps + 1
        };
    
        let list = [...this.state.players];
    
        list.push(newPlayer);

        this.setState({players: list,name: '',steps: 0});
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
    
    hydrateScoreWithLocalStorege(){
        let key = 'steps';
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

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
          // save to localStorage
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
        this.hydrateScoreWithLocalStorege();
    }

    handleSubmit(event) {
        this.addPlayer();
        this.saveStateToLocalStorage();
        this.props.onClick();
        window.location.reload(false); 
    }

    componentDidMount(){
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
    
        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }
    
    renderPopOut(){
        if (this.props.isWin){
            
        return (
            <Animated className='win-pop-out' animationIn="bounceInDown"
             animationOut="fadeOut" isVisible={true}>
                <div className = 'win-pop-out--text'> 
                    You won!
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p><label > Enter your name 
                            <input className='win-pop-out--form--input'
                             type="text" name="name" value={this.state.name}
                            onChange={this.handleChange} /></label></p>
                        <p><input className='win-pop-out--form--button'
                             type="submit" value="Submit" /></p>
                    </form>
                </div>
            </Animated>
        );
        }
    }

    render() {
            return (
                <div>
                {this.renderPopOut()}
                </div>
            );
    }
}