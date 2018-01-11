import { connect } from 'react-redux';
import { moveBall as move } from '../actions';
import CannonBall from '../components/CannonBall/CannonBall';

const mapStateToProps = (state, ownProps) => {
  const { cannonBalls } = state;
  const cannonBall = cannonBalls.find(ball => (ball.id === ownProps.id));
  const position = cannonBall ? cannonBall.position : ownProps.position;
  const { angle } = ownProps;
  return { position, angle };
};

const mapDispatchToProps = dispatch => ({
  moveBall: (position, id, angle) => {
    setTimeout(() => {
      dispatch(move(position, id, angle));
    });
  },
});

const Trajectory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CannonBall);

export default Trajectory;
