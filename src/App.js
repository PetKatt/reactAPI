import React, { Component } from 'react';
import GitHub from "./components/GitHub";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHub username="petkatt" />  
      </div>
    );
  }
}

export default App;
