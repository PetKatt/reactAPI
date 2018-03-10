import React, { Component } from 'react';
import GitHub from "./GitHub";
import Sandbox from "./Sandbox";

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <GitHub username="petkatt" />
        <Sandbox />  
      </div>
    );
  }
}

export default App;
