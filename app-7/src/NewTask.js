import React,{ Component } from "react";

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }
    }

    handleChange = (e) => {
    this.setState({userInput: e.target.value});
    }

    handleAdd = () => {
        this.props.add(this.state.userInput);
        this.setState({userInput: ""})
    }

    render() {
        return (
            <div>
                <input
                value={this.state.userInput}
                placeholder="Enter new task" 
                onChange={e => this.handleChange(e)}  
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default NewTask;