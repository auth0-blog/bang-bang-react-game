import { connect } from 'react-redux';
import { shoot, moveMouse, createAndMove, destroyDiscs, startGame, moveDiscs } from '../actions';
import App from '../App';

const mapStateToProps = state => ({
  angle: state.angle,
  cannonBalls: state.cannonBalls,
  flyingDiscs: state.flyingDiscs,
  gameStarted: state.gameStarted,
  lastDiscCreatedAt: state.lastDiscCreatedAt,
  lifes: state.lifes,
  mousePosition: state.mousePosition,
});

const mapDispatchToProps = dispatch => ({
  createAndMove: () => {
    dispatch(createAndMove());
  },
  destroyDiscs: (objectsDestroyed) => {
    dispatch(destroyDiscs(objectsDestroyed));
  },
  moveDiscs: () => {
    dispatch(moveDiscs());
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
