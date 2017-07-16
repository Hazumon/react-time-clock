import React, {component} from "react";
// import './foundation.css'

const Button = (props) => {

  return(

    <div className = "row">
      <div className = "large-6 columns">
      <ul className="menu">
        <li><a href="#">One</a></li>
        <li><a href="#">Two</a></li>
        <li><a href="#">Three</a></li>
        <li><a href="#">Four</a></li>
      </ul>
    </div>

    <div className="large-6 columns">
    <ul className="button-group round">
      <li> <a href="index.html" class="button"> Home</a></li>
      <li> <a href="lesson.html" class="button"> Lesson</a></li>

    </ul>
    </div>
  </div>


    )
  }


/*
<div className="App">
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
*/













  export default Button;
