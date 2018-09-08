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
    return (
      <div className="App">
          <h2>{this.state.deathStar.name}</h2>
          <h2>{this.state.deathStar.model}</h2>
          <h2>{this.state.deathStar.passengers}</h2>
          <h2>{this.state.deathStar.starship_class}</h2>
      </div>
    );
  }
}

export default App;
