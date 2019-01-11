import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deathStar: ""
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/starships/9/')
    .then(res => {
      this.setState({deathStar: res.data});
    })
  }

  render() {
    const { name, model, passengers, starship_class } = this.state.deathStar;
    return (
      <div className="App">
          <h2>{name}</h2>
          <h2>{model}</h2>
          <h2>{passengers}</h2>
          <h2>{starship_class}</h2>
      </div>
    );
  }
}

export default App;
