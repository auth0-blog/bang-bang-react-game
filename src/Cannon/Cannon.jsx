import React from 'react';

const Cannon = () => {
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

export default Cannon;
