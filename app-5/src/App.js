import React, { Component } from 'react';
import Image from './Image';
import Conflict from './Conflict.jpg'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image 
          myImage={"http://www.canberracatvet.com.au/_photos/blog/Cat_Fight.jpg"}
        />
      </div>
    );
  }
}

export default App;
