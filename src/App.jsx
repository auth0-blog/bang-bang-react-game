import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';

import Canvas from './components/Canvas/Canvas';
import Ground from './components/Ground/Ground';
import Cannon from './components/Cannon/Cannon';
import { getCanvasPosition, updateCanvasSize } from './utils/formulas';
import Sky from './components/Sky/Sky';
import './App.css';
import Position from './utils/Position';
import VisualClues from './components/VisualClues/VisualClues';
import Heart from './components/Heart/Heart';
import FlyingDisc from './components/FlyingDisc/FlyingDisc';
import CannonBall from './components/CannonBall/CannonBall';
import StartGame from './components/StartGame/StartGame';
import {
  heartAxisY,
  heartInitialAxisX, heartWidth,
  intervalBetweenDiscCreation, intervalBetweenRefreshes,
  maximumSimultaneousShots, spaceKeyId,
} from './utils/constants';
import Title from './components/Title/Title';
import CurrentScore from './components/CurrentScore/CurrentScore';
import Ranking from './components/Ranking/Ranking';

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.canvasMousePosition = new Position(0, 0);
  }

  componentDidMount() {
    const self = this;

    Pusher.logToConsole = true;

    const pusher = new Pusher('e504736d8f802e6d36f1', {
      authEndpoint: 'https://wt-krebs-bruno-sp-gmail-com-0.run.webtask.io/webtask/pusher/auth',
      cluster: 'us2',
      encrypted: true,
    });

    const channel = pusher.subscribe('presence-leaderboard');

    channel.bind('pusher:subscription_succeeded', (members) => {
      members.each(console.log);
    });

    setInterval(() => {
      if (!self.props.gameState.started) return;

      const deltaDiscCreation = (new Date()).getTime() - self.props.lastDiscCreatedAt;
      if (deltaDiscCreation > intervalBetweenDiscCreation) {
        self.props.createAndMove(self.canvasMousePosition);
      } else {
        self.props.moveObjects(self.canvasMousePosition);
      }
    }, intervalBetweenRefreshes);
    document.onkeypress = (event) => {
      if (event.keyCode === spaceKeyId || event.charCode === spaceKeyId) {
        self.shootCannonBall({
          clientX: self.mousePosition.x,
          clientY: self.mousePosition.y,
        });
      }
    };
    window.onresize = updateCanvasSize;
    updateCanvasSize();
  }

  trackMouse(event) {
    const canvasMousePosition = getCanvasPosition(event);
    // am I cheating?
    this.mousePosition = new Position(event.clientX, event.clientY);
    this.canvasMousePosition = canvasMousePosition;
  }

  shootCannonBall(event) {
    if (!this.props.gameState.started) return;
    this.trackMouse(event);
    if (this.props.cannonBalls.length < maximumSimultaneousShots) {
      this.props.shoot(this.canvasMousePosition);
    }
  }

  render() {
    const showVisualClues = false;
    return (
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
        <Cannon rotation={this.props.angle} />
        <VisualClues visible={showVisualClues} position={this.canvasMousePosition} />
        {this.props.gameState.lives.map(position => (
          <Heart
            xAxis={heartInitialAxisX - (position * heartWidth)}
            yAxis={heartAxisY}
            key={position}
          />
        ))}
        {
          !this.props.gameState.started &&
          <g>
            <Title />
            <Ranking />
            <StartGame onClick={this.props.startGame} />
          </g>
        }
        {
          this.props.gameState.started &&
          <CurrentScore score={this.props.gameState.kills} />
        }
      </Canvas>
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
  lastDiscCreatedAt: PropTypes.instanceOf(Date).isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;

