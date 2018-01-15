import { connect } from 'react-redux';
import FlyingDisc from '../components/FlyingDisc/FlyingDisc';

const mapStateToProps = (state, ownProps) => {
  const { flyingDiscs } = state;
  const flyingDisc = flyingDiscs.find(disc => (disc.id === ownProps.id));
  const position = flyingDisc ? flyingDisc.position : ownProps.position;
  const { angle } = ownProps;
  return { position, angle };
};

const FlywingDiscMotion = connect(mapStateToProps)(FlyingDisc);

export default FlywingDiscMotion;
