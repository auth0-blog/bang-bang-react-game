import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';
import * as Auth0 from 'auth0-web';

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
import Leaderboard from './components/Leaderboard/Leaderboard';

Auth0.configure({
  domain: 'bkrebs.auth0.com',
  clientID: '6pjrHHSjF0ME4ShrOxN62ScKyMmXJud6',
  audience: 'https://aliens-go-home.digituz.com.br',
  redirectUri: 'http://localhost:3000/',
  responseType: 'token id_token',
  scope: 'openid profile manage:points',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.trackMouse = this.trackMouse.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.canvasMousePosition = new Position(0, 0);
    this.channel = null;
  }

  componentDidMount() {
    const self = this;

    Auth0.handleAuthCallback();

    Auth0.subscribe((auth) => {
      if (!auth) {
        self.props.authenticationEvent(null);
        return;
      }

      Pusher.logToConsole = true;

      const pusher = new Pusher('e504736d8f802e6d36f1', {
        authEndpoint: 'https://wt-krebs-bruno-sp-gmail-com-0.run.webtask.io/webtask/pusher/auth',
        cluster: 'us2',
        encrypted: true,
        auth: {
          headers: { Authorization: `Bearer ${localStorage.getItem(Auth0.ACCESS_TOKEN)}` },
        },
      });

      this.channel = pusher.subscribe('presence-leaderboard');

      this.channel.bind('pusher:subscription_succeeded', (leaderboard) => {
        self.props.loadLeaderboard(leaderboard);
      });

      this.channel.bind('pusher:member_added', (member) => {
        self.props.addMember(member);
      });

      this.channel.bind('pusher:member_removed', (member) => {
        self.props.removeMember(member);
      });

      this.channel.bind('client-new-max-score', (maxScore) => {
        self.props.newMaxScore(maxScore);
      });
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

  componentWillReceiveProps(nextProps) {
    const gameOver = !nextProps.gameState.started && this.props.gameState.started;
    if (!gameOver) return;

    // do we need to update the leaderboard?
    return;
    // if (nextProps.me.maxScore < nextProps.gameState.kills) {
    //   this.channel.trigger('client-new-max-score', {
    //     id: nextProps.me.id,
    //     maxScore: nextProps.gameState.kills,
    //   });
    //
    //   this.props.newMaxScore({
    //     id: nextProps.me.id,
    //     maxScore: nextProps.gameState.kills,
    //   });
    // }
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
            <Leaderboard
              me={this.props.me}
              leaderboard={this.props.leaderboard}
              authenticate={Auth0.signIn}
            />
            <StartGame onClick={this.props.startGame} />
          </g>
        }
        <CurrentScore score={this.props.gameState.kills} />
      </Canvas>
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  me: PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  leaderboard: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
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
  authenticationEvent: PropTypes.func.isRequired,
  moveObjects: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  loadLeaderboard: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
  removeMember: PropTypes.func.isRequired,
  newMaxScore: PropTypes.func.isRequired,
};

export default App;

