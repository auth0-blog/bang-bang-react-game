import React from 'react';

const CannonPipe = () => {
  const cannonPipeStyle = {
    fill: '#595959',
  };
  return (
    <g id="cannon" transform="rotate(45, 340, 650)">
      <ellipse
        style={cannonPipeStyle}
        cx="340"
        cy="650"
        rx="40"
        ry="40"
      />
      <rect
        style={cannonPipeStyle}
        x="300"
        y="550"
        width="80"
        height="100"
      />
    </g>
  );
};

export default CannonPipe;
