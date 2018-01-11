import { connect } from 'react-redux';
import { shoot } from '../actions';
import App from '../App';

const mapStateToProps = (state) => {
  const { cannonBalls } = state;
  return {
    cannonBalls,
  };
};

const mapDispatchToProps = dispatch => ({
  shoot: (position) => {
    dispatch(shoot(position));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
