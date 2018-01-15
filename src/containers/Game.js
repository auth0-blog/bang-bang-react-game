import { connect } from 'react-redux';
import { shoot, moveMouse, addFlyingDisc, destroyDiscs, startGame } from '../actions';
import App from '../App';

const mapStateToProps = state => ({
  angle: state.angle,
  cannonBalls: state.cannonBalls,
  flyingDiscs: state.flyingDiscs,
  gameStarted: state.gameStarted,
  lifes: state.lifes,
  mousePosition: state.mousePosition,
});

const mapDispatchToProps = dispatch => ({
  createFlyingDisc: () => {
    dispatch(addFlyingDisc());
  },
  destroyDiscs: (objectsDestroyed) => {
    dispatch(destroyDiscs(objectsDestroyed));
  },
  moveMouse: (position) => {
    dispatch(moveMouse(position));
  },
  shoot: (angle) => {
    dispatch(shoot(angle));
  },
  startGame: () => {
    dispatch(startGame());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
