import React, { Component } from 'react';
import Canvas from './Canvas/Canvas';
import Ground from './Ground/Ground';
import Cannon from './Cannon/Cannon';
import { calculateAngle, getCanvasPosition } from './Utils/formulas';
import Sky from './Sky/Sky';
import './App.css';
import CannonBall from './CannonBall/CannonBall';
import Position from './Utils/Position';

const firstCannonAxis = {
  x: 0,
  y: 0,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.showCannonBall = this.showCannonBall.bind(this);
    this.state = {
      angle: 45,
      mousePosition: {
        x: 0,
        y: 0,
      },
      showCannonBall: false,
      cannonBallPosition: new Position(-100, 0),
    };
  }

  trackMouse(event) {
    const mousePosition = getCanvasPosition('my-super-canvas', event);

    const angle = calculateAngle(
      firstCannonAxis.x, firstCannonAxis.y,
      mousePosition.x, mousePosition.y,
    );

    if (Number.isNaN(angle)) {
      return;
    }
    this.setState({
      angle,
      mousePosition: { ...mousePosition },
    });
  }

  showCannonBall(event) {
    const mousePosition = getCanvasPosition('my-super-canvas', event);
    this.setState({
      ...this.state,
      showCannonBall: true,
      cannonBallPosition: mousePosition,
    });
  }

  render() {
    const lineStyle = {
      stroke: 'black',
      strokeWidth: '2',
    };
    const showVisualClues = true;
    return (
      <div>
        <Canvas
          trackMouse={event => (this.trackMouse(event))}
          mouseClicked={event => (this.showCannonBall(event))}
        >
          <Sky />
          <Ground />
          <Cannon xAxis={firstCannonAxis.x} yAxis={firstCannonAxis.y} rotation={this.state.angle} />
          {
            showVisualClues && (
              <g>
                <line
                  x1={-400}
                  y1={firstCannonAxis.y}
                  x2={400}
                  y2={firstCannonAxis.y}
                  style={lineStyle}
                />
                <line
                  x1={firstCannonAxis.x}
                  y1={-800}
                  x2={firstCannonAxis.x}
                  y2={400}
                  style={lineStyle}
                />
                <line
                  x1={firstCannonAxis.x}
                  y1={firstCannonAxis.y}
                  x2={this.state.mousePosition.x}
                  y2={this.state.mousePosition.y}
                  style={lineStyle}
                />
              </g>
            )
          }
          <CannonBall
            visible={this.state.showCannonBall}
            position={this.state.cannonBallPosition}
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

