import { connect } from 'react-redux';
import { shoot, moveMouse, addFlyingDisc } from '../actions';
import App from '../App';

const mapStateToProps = state => ({
  cannonBalls: state.cannonBalls,
  mousePosition: state.mousePosition,
  angle: state.angle,
  flyingDiscs: state.flyingDiscs,
});

const mapDispatchToProps = dispatch => ({
  shoot: (angle) => {
    dispatch(shoot(angle));
  },
  moveMouse: (position) => {
    dispatch(moveMouse(position));
  },
  createFlyingDisc: () => {
    dispatch(addFlyingDisc());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
