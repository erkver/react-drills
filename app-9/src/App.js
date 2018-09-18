import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavLink to="/" className="active">Home</NavLink>
      <NavLink to="/signup" className="active">Signup</NavLink>
      <NavLink to="/details" className="active">Details</NavLink>
      {routes}
      </div>
    );
  }
}

export default App;
