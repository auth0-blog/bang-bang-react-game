import React from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';

const CannonBall = props => (
  <ellipse
    className="cannon-ball"
    cx={props.position.x}
    cy={props.position.y}
    rx="20"
    ry="20"
  />
);

CannonBall.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
};

export default CannonBall;
