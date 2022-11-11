// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  getAccelerate = () => {
    this.setState(prevState => {
      if (prevState.speed === 200) {
        return {speed: prevState.speed}
      }
      return {speed: prevState.speed + 10}
    })
  }

  applyBrake = () => {
    this.setState(prevState => {
      if (prevState.speed === 0) {
        return {speed: prevState.speed}
      }
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p className="speed">Speed is {speed}mph</p>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            onClick={this.getAccelerate}
            className="accelerate"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.applyBrake} className="brake" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
