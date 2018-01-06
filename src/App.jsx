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
      mousePosition: {
        x: 0,
        y: 0,
      },
    };
  }

  trackMouse(event) {
    // mouse position on auto-scaling canvas
    // https://stackoverflow.com/a/10298843/1232793
    const svg = document.getElementById('my-super-canvas');
    const point = svg.createSVGPoint();

    point.x = event.clientX;
    point.y = event.clientY;
    const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());

    const { pageX, pageY } = event;
    const angle = calculateAngle(firstCannonAxis.x, firstCannonAxis.y, pageX, pageY);
    if (Number.isNaN(angle)) {
      return;
    }
    this.setState({
      angle,
      mousePosition: { x, y },
    });
  }

  render() {
    const lineStyle = {
      stroke: 'black',
      strokeWidth: '2',
    };
    return (
      <div>
        <Canvas trackMouse={event => (this.trackMouse(event))}>
          <Sky />
          <Ground />
          <Cannon xAxis={firstCannonAxis.x} yAxis={firstCannonAxis.y} rotation={this.state.angle} />
          <line x1={0} y1={firstCannonAxis.y} x2={1600} y2={firstCannonAxis.y} style={lineStyle} />
          <line x1={firstCannonAxis.x} y1={0} x2={firstCannonAxis.x} y2={800} style={lineStyle} />
          <line
            x1={firstCannonAxis.x}
            y1={firstCannonAxis.y}
            x2={this.state.mousePosition.x}
            y2={this.state.mousePosition.y}
            style={lineStyle}
          />
        </Canvas>
        <p>
          Mouse X: {this.state.mousePosition.x};
          Mouse Y: {this.state.mousePosition.y};
          Angle: {this.state.angle};
        </p>
      </div>
    );
  }
}

export default App;
