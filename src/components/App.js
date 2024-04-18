import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        
    };
    buttonClickHandler(e) {
        this.setState({...this.state,[e.target.name]:true})
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" name="renderBall" onClick={this.buttonClickHandler} >Start</button>
		}
    }
    
    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown",(e)=>{
           if ("ArrowRight"==e.key && this.state.renderBall) {
            this.setState({...this.state,ballPosition:{ "left":`${Number(this.state.ballPosition.left.split("px")[0])+5}px` }})
           }
        })
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
