import { connect } from 'react-redux';
import FlyingDisc from '../components/FlyingDisc/FlyingDisc';
import { moveDisc as move } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const { flyingDiscs } = state;
  const flyingDisc = flyingDiscs.find(disc => (disc.id === ownProps.id));
  const position = flyingDisc ? flyingDisc.position : ownProps.position;
  const { angle } = ownProps;
  return { position, angle };
};

const mapDispatchToProps = dispatch => ({
  moveDisc: (position, id, angle) => {
    setTimeout(() => {
      dispatch(move(position, id, angle));
    }, 15);
  },
});

const FlywingDiscMotion = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlyingDisc);

export default FlywingDiscMotion;
