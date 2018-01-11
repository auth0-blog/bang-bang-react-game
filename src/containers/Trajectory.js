import { connect } from 'react-redux';
import { moveBall as move } from '../actions';
import CannonBall from '../components/CannonBall/CannonBall';

const mapStateToProps = (state, ownProps) => {
  const { cannonBalls } = state;
  const cannonBall = cannonBalls.find(ball => (ball.id === ownProps.id));
  const position = cannonBall ? cannonBall.position : ownProps.position;
  return { position };
};

const mapDispatchToProps = dispatch => ({
  moveBall: (position, id) => {
    setTimeout(() => {
      dispatch(move(position, id));
    });
  },
});

const Trajectory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CannonBall);

export default Trajectory;
