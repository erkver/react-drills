import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    }
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value});
  }

  addToList = (item) => {
    const { list } = this.state;
    let itemArr = list.slice();
    itemArr.push(item);
    this.setState({list: itemArr, userInput: ""});
  }

  render() {
    const { list, userInput } = this.state;
    let newItem = list.map((e, i) => {
      return(
        <Todo 
          key={i}
          item={e}
        />
      );
    });

    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <input
          value={userInput}
          placeholder="Enter new task" 
          onChange={e => this.handleChange(e)} 
        />
        <button onClick={() => this.addToList(userInput)}>Add</button>
        { newItem }
      </div>
    );
  }
}

export default App;
