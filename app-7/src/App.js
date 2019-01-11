import React, { Component } from 'react';
import NewTask from "./NewTask";
import List from "./List";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  addToList = (item) => {
    const { list } = this.state;
    let itemArr = list;
    itemArr.push(item);
    this.setState({list: itemArr, userInput: ""});
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1>My to-do List:</h1>
        <NewTask add={this.addToList}/> 
        <List tasks={list}/>
      </div>
    );
  }
}

export default App;

