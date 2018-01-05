import React from 'react';

const CannonBall = () => {
  const cannonStyle = {
    fill: '#333',
  };
  return (
    <ellipse
      style={cannonStyle}
      cx="80"
      cy="700"
      rx="20"
      ry="20"
    />
  );
};

export default CannonBall;
