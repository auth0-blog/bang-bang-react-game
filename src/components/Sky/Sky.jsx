import React from 'react';
import { gameHeight, gameLeftmostXPoint, gameUppermostPoint, gameWidth } from '../../utils/constants';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  return (
    <g id="sky">
      <rect
        style={skyStyle}
        x={gameLeftmostXPoint}
        y={gameUppermostPoint}
        width={gameWidth}
        height={gameHeight}
      />
    </g>
  );
};

export default Sky;
