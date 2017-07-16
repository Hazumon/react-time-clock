import React, { Component } from 'react';
import Button from "./Button"
// import logo from './logo.svg';
// import './App.css';
// import Greeting from "./Greeting"
// import Custom from "./Custom"
import './foundation.css';
import Clock from "./Clock"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Clock />
        <Button />

        <h1> Hello World </h1>
      </div>
    );
  }
}
























export default App;
