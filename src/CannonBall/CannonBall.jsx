import React from 'react';
import PropTypes from 'prop-types';

const CannonBall = (props) => {
  const cannonStyle = {
    fill: '#333',
  };
  return (
    <ellipse
      style={cannonStyle}
      cx={props.x}
      cy={props.y}
      rx="20"
      ry="20"
    />
  );
};

CannonBall.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CannonBall;
