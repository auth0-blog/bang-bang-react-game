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
import FlyingDiscMotion from './containers/FlyingDiscMotion';
import checkCollisions from './utils/checkCollisions';
import Heart from './components/Heart/Heart';

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentDidMount() {
    const self = this;
    document.onkeypress = (event) => {
      if (event.keyCode === 32 || event.charCode === 32) {
        self.shootCannonBall();
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    const self = this;
    if (nextProps.gameStarted && !this.props.gameStarted) {
      setInterval(() => {
        self.props.createFlyingDisc();
      }, 1000);
    }
    const { cannonBalls, flyingDiscs } = nextProps;
    const objectsDestroyed = checkCollisions(cannonBalls, flyingDiscs);
    if (objectsDestroyed.length > 0) {
      this.props.destroyDiscs(objectsDestroyed);
    }
  }

  trackMouse(event) {
    const mousePosition = getCanvasPosition('my-super-canvas', event);
    this.props.moveMouse(mousePosition);
  }

  shootCannonBall() {
    if (!this.props.gameStarted) return;
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
          {this.props.lifes.map(position => (
            <Heart xAxis={-210 - (position * 70)} yAxis={40} key={position} />
          ))}
        </Canvas>
        <p>
          Mouse X: {this.props.mousePosition.x};
          Mouse Y: {this.props.mousePosition.y};
          Angle: {this.props.angle};
        </p>
        <button onClick={this.props.startGame}>Start Game</button>
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
  lifes: PropTypes.arrayOf(PropTypes.number).isRequired,
  angle: PropTypes.number.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;

