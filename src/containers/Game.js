import { connect } from 'react-redux';
import { shoot, moveMouse } from '../actions';
import App from '../App';

const mapStateToProps = (state) => {
  const { cannonBalls, mousePosition, angle } = state;
  return {
    cannonBalls, mousePosition, angle,
  };
};

const mapDispatchToProps = dispatch => ({
  shoot: (position) => {
    dispatch(shoot(position));
  },
  moveMouse: (position) => {
    dispatch(moveMouse(position));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
