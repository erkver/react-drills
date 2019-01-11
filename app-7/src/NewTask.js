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
        const { add } = this.props;
        const { userInput } = this.state;
        add(userInput);
        this.setState({userInput: ""})
    }

    render() {
        const { userInput } = this.state;
        return (
            <div>
                <input
                    value={userInput}
                    placeholder="Enter new task" 
                    onChange={e => this.handleChange(e)}  
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default NewTask;