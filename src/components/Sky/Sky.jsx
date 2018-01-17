import React from 'react';
import { gameHeight, gameUppermostPoint, skyAndGroundWidth } from '../../utils/constants';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  return (
    <g id="sky">
      <rect
        style={skyStyle}
        x={skyAndGroundWidth / -2}
        y={gameUppermostPoint}
        width={skyAndGroundWidth}
        height={gameHeight}
      />
    </g>
  );
};

export default Sky;
