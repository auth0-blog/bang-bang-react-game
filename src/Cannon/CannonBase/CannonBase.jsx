import React from 'react';

const CannonBase = () => {
  const cannonBaseStyle = {
    stroke: '#000000',
  };

  return (
    <path
      style={cannonBaseStyle}
      d="
          M285,700
          c 30 -60, 80 -60, 110 0"
    />
  );
};

export default CannonBase;
