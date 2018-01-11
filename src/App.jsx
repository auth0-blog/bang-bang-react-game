import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas/Canvas';
import Ground from './components/Ground/Ground';
import Cannon from './components/Cannon/Cannon';
import { calculateAngle, getCanvasPosition } from './utils/formulas';
import Sky from './components/Sky/Sky';
import './App.css';
import CannonBall from './components/CannonBall/CannonBall';
import Position from './utils/Position';
import VisualClues from './components/VisualClues/VisualClues';

const firstCannonAxis = {
  x: 0,
  y: 0,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.state = {
      angle: 45,
      mousePosition: new Position(0, 0),
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
      mousePosition,
    });
  }

  shootCannonBall(event) {
    const mousePosition = getCanvasPosition('my-super-canvas', event);
    this.props.shoot(mousePosition);
  }

  render() {
    const showVisualClues = true;
    return (
      <div>
        <Canvas
          trackMouse={event => (this.trackMouse(event))}
          mouseClicked={event => (this.shootCannonBall(event))}
        >
          <Sky />
          <Ground />
          <Cannon xAxis={firstCannonAxis.x} yAxis={firstCannonAxis.y} rotation={this.state.angle} />
          {this.props.cannonBalls.map(cannonBall => (
            <CannonBall key={cannonBall.key} position={cannonBall.position} />
          ))}
          <VisualClues visible={showVisualClues} position={this.state.mousePosition} />
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

App.propTypes = {
  cannonBalls: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.instanceOf(Position).isRequired,
    key: PropTypes.number.isRequired,
  })).isRequired,
  shoot: PropTypes.func.isRequired,
};

export default App;

