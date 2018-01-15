import React from 'react';
import PropTypes from 'prop-types';
import DiscBase from './DiscBase';
import DiscTop from './DiscTop';
import Position from '../../utils/Position';

const FlyingDisc = props => (
  <g id="flying-disc">
    <DiscBase position={props.position} />
    <DiscTop position={props.position} />
  </g>
);

FlyingDisc.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
};

export default FlyingDisc;
