import React from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';

const CannonBall = (props) => {
  const ballStyle = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };
  return (
    <ellipse
      style={ballStyle}
      cx={props.position.x}
      cy={props.position.y}
      rx="16"
      ry="16"
    />
  );
};

CannonBall.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
};

export default CannonBall;
