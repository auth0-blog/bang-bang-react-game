import React, { Component } from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import Cannon from './Cannon/Cannon';
import { calculateAngle } from './Utils/formulas';
import Sky from './Sky/Sky';
import './App.css';

const firstCannonAxis = {
  x: 200,
  y: 700,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.state = {
      angle: 45,
    };
  }

  trackMouse(event) {
    const { pageX, pageY } = event;
    const angle = 90 - calculateAngle(firstCannonAxis.x, firstCannonAxis.y, pageX, pageY);
    if (Number.isNaN(angle)) {
      return;
    }
    this.setState({
      angle,
    });
  }

  render() {
    return (
      <Canvas trackMouse={event => (this.trackMouse(event))}>
        <Sky />
        <Ground />
        <Cannon xAxis={firstCannonAxis.x} yAxis={firstCannonAxis.y} rotation={this.state.angle} />
      </Canvas>
    );
  }
}

export default App;
