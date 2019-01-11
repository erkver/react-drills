import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  render() {
    const { food } = this.state;
    let foodCopy = food.map((e, i) => {
      return(
        <h2 key={ i }>{ e }</h2>
      );
    });
    return (
      <div className="App">
        { foodCopy }
      </div>
    );
  }
}

export default App;
