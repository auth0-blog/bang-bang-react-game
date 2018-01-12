import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas/Canvas';
import Ground from './components/Ground/Ground';
import Cannon from './components/Cannon/Cannon';
import {checkCollision, getCanvasPosition} from './utils/formulas';
import Sky from './components/Sky/Sky';
import './App.css';
import Trajectory from './containers/Trajectory';
import Position from './utils/Position';
import VisualClues from './components/VisualClues/VisualClues';
import FlyingDiscMotion from './containers/FlyingDiscMotion';

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.createFlyingDisc();
    }, 1000);
    document.onkeypress = (event) => {
      if (event.keyCode === 32 || event.charCode === 32) {
        self.shootCannonBall();
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    const { cannonBalls, flyingDiscs } = nextProps;
    const objectsDestroyed = [];
    flyingDiscs.forEach((disc) => {
      const rectA = {
        x1: disc.position.x - 40,
        y1: disc.position.y - 10,
        x2: disc.position.x + 40,
        y2: disc.position.y + 10,
      };
      cannonBalls.forEach((ball) => {
        const rectB = {
          x1: ball.position.x - 8,
          y1: ball.position.y - 8,
          x2: ball.position.x + 8,
          y2: ball.position.y + 8,
        };
        if (checkCollision(rectA, rectB)) {
          objectsDestroyed.push({
            disc, ball,
          });
        }
      });
    });
    if (objectsDestroyed.length > 0) {
      this.props.destroyDiscs(objectsDestroyed);
    }
  }

  trackMouse(event) {
    const mousePosition = getCanvasPosition('my-super-canvas', event);
    this.props.moveMouse(mousePosition);
  }

  shootCannonBall() {
    if (this.props.cannonBalls.length < 2) {
      this.props.shoot(this.props.angle);
    }
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
          {this.props.flyingDiscs.map(flyingDisc => (
            <FlyingDiscMotion
              key={flyingDisc.id}
              id={flyingDisc.id}
              position={flyingDisc.position}
              angle={flyingDisc.angle}
            />
          ))}
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
  flyingDiscs: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.instanceOf(Position).isRequired,
    angle: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  shoot: PropTypes.func.isRequired,
  createFlyingDisc: PropTypes.func.isRequired,
  destroyDiscs: PropTypes.func.isRequired,
  moveMouse: PropTypes.func.isRequired,
  mousePosition: PropTypes.instanceOf(Position).isRequired,
  angle: PropTypes.number.isRequired,
};

export default App;

