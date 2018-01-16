import { connect } from 'react-redux';
import { shoot, createAndMove, startGame, moveObjects } from '../actions';
import App from '../App';

const mapStateToProps = state => ({
  angle: state.angle,
  cannonBalls: state.cannonBalls,
  flyingDiscs: state.flyingDiscs,
  gameStarted: state.gameStarted,
  lastDiscCreatedAt: state.lastDiscCreatedAt,
  lives: state.lives,
});

const mapDispatchToProps = dispatch => ({
  createAndMove: (mousePosition) => {
    dispatch(createAndMove(mousePosition));
  },
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
  shoot: (mousePosition) => {
    dispatch(shoot(mousePosition));
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
