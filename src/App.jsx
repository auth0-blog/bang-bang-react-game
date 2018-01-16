import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas/Canvas';
import Ground from './components/Ground/Ground';
import Cannon from './components/Cannon/Cannon';
import { getCanvasPosition } from './utils/formulas';
import Sky from './components/Sky/Sky';
import './App.css';
import Position from './utils/Position';
import VisualClues from './components/VisualClues/VisualClues';
import Heart from './components/Heart/Heart';
import FlyingDisc from './components/FlyingDisc/FlyingDisc';
import CannonBall from './components/CannonBall/CannonBall';

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const self = this;
    setInterval(() => {
      if (!self.props.gameStarted) return;

      const deltaDiscCreation = (new Date()).getTime() - self.props.lastDiscCreatedAt;
      if (deltaDiscCreation > 1000) {
        self.props.createAndMove(self.mousePosition);
      } else {
        self.props.moveObjects(self.mousePosition);
      }
    }, 10);
    document.onkeypress = (event) => {
      if (event.keyCode === 32 || event.charCode === 32) {
        self.shootCannonBall();
      }
    };
  }

  trackMouse(event) {
    const mousePosition = getCanvasPosition('my-super-canvas', event);
    // am I cheating?
    this.mousePosition = mousePosition;
  }

  shootCannonBall(event) {
    if (!this.props.gameStarted) return;
    this.trackMouse(event);
    if (this.props.cannonBalls.length < 2) {
      this.props.shoot(this.mousePosition);
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
            <FlyingDisc
              key={flyingDisc.id}
              position={flyingDisc.position}
            />
          ))}
          {this.props.cannonBalls.map(cannonBall => (
            <CannonBall
              key={cannonBall.id}
              position={cannonBall.position}
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
  angle: PropTypes.number.isRequired,
  cannonBalls: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.instanceOf(Position).isRequired,
    angle: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  createAndMove: PropTypes.func.isRequired,
  flyingDiscs: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.instanceOf(Position).isRequired,
    angle: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  gameStarted: PropTypes.bool.isRequired,
  lastDiscCreatedAt: PropTypes.instanceOf(Date).isRequired,
  lifes: PropTypes.arrayOf(PropTypes.number).isRequired,
  mousePosition: PropTypes.instanceOf(Position).isRequired,
  moveObjects: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;

