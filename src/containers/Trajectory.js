import { connect } from 'react-redux';
import CannonBall from '../components/CannonBall/CannonBall';

const mapStateToProps = (state, ownProps) => {
  const { cannonBalls } = state;
  const cannonBall = cannonBalls.find(ball => (ball.id === ownProps.id));
  const position = cannonBall ? cannonBall.position : ownProps.position;
  const { angle } = ownProps;
  return { position, angle };
};

const Trajectory = connect(mapStateToProps)(CannonBall);

export default Trajectory;
