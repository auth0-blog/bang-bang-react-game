import React from 'react';
import { gameLeftmostXPoint, gameLowermostPoint, gameRightmostXPoint, gameWidth } from '../../utils/constants';

const Ground = () => {
  const groundStyle = {
    fill: '#59a941',
  };
  const division = {
    stroke: '#458232',
    strokeWidth: '3px',
  };
  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        style={groundStyle}
        x={gameLeftmostXPoint}
        y={0}
        width={gameWidth}
        height={gameLowermostPoint}
      />
      <line
        x1={gameLeftmostXPoint}
        y1={0}
        x2={gameRightmostXPoint}
        y2={0}
        style={division}
      />
    </g>
  );
};

export default Ground;
