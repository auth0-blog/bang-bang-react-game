import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas/Canvas';
import Ground from './components/Ground/Ground';
import Cannon from './components/Cannon/Cannon';
import { getCanvasPosition } from './utils/formulas';
import Sky from './components/Sky/Sky';
import './App.css';
import Trajectory from './containers/Trajectory';
import Position from './utils/Position';
import VisualClues from './components/VisualClues/VisualClues';

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
  }

  trackMouse(event) {
    const mousePosition = getCanvasPosition('my-super-canvas', event);
    this.props.moveMouse(mousePosition);
  }

  shootCannonBall() {
    this.props.shoot(this.props.angle);
  }

  render() {
    const showVisualClues = false;
    const firstCannonAxis = {
      x: 0,
      y: 0,
    };
    return (
      <div>
        <Canvas
          trackMouse={event => (this.trackMouse(event))}
          mouseClicked={event => (this.shootCannonBall(event))}
        >
          <Sky />
          <Ground />
          {this.props.cannonBalls.map(cannonBall => (
            <Trajectory
              key={cannonBall.id}
              id={cannonBall.id}
              position={cannonBall.position}
              angle={cannonBall.angle}
            />
          ))}
          <Cannon xAxis={firstCannonAxis.x} yAxis={firstCannonAxis.y} rotation={this.props.angle} />
          <VisualClues visible={showVisualClues} position={this.props.mousePosition} />
        </Canvas>
        <p>
          Mouse X: {this.props.mousePosition.x};
          Mouse Y: {this.props.mousePosition.y};
          Angle: {this.props.angle};
        </p>
      </div>
    );
  }
}

App.propTypes = {
  cannonBalls: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.instanceOf(Position).isRequired,
    angle: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  shoot: PropTypes.func.isRequired,
  moveMouse: PropTypes.func.isRequired,
  mousePosition: PropTypes.instanceOf(Position).isRequired,
  angle: PropTypes.number.isRequired,
};

export default App;

