import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      userInput: ""
    }
  }

  filterFood = (str) => {
    this.setState({userInput: str.target.value});
  }

  render() {
    console.log(this.state.userInput);
    let foodCopy = this.state.food
    .filter(foods => foods.includes(this.state.userInput))
    .map((e, i) => {
      return(
        <h2 key={ i }>{ e }</h2>
      );
    });
    return (
      <div className="App">
      <input onChange={(e) => this.filterFood(e)}></input>
        { foodCopy }
      </div>
    );
  }
}

export default App;
