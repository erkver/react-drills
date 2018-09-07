import React,{ Component } from "react";

class InputUpdater extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ""
        }
    }

    updateUserInput(e) {
        this.setState({userInput: e.target.value});
    }
    render() {
        return (
            <div>
                <input onChange={e => this.updateUserInput(e)}></input>
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

export default InputUpdater;