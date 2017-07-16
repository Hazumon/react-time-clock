import React, {Component} from "react"

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
        date: new Date()
    }
  }

  componentDidMount(){
    // continues to update the render method which: calls the tick method
    // and that method updates the state which updates the date
    this.timeID = setInterval( () => {this.tick()}, 1000)
  }

  tick(){
    this.setState(
        { date: new Date()
        })
      }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  render(){
    return(
      <div>
        <h3> the current time is: {this.state.date.toLocaleTimeString()} </h3>
      </div>
    )
  }
}

export default Clock
