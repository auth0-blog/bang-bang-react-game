import React from 'react';

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
        x="-400"
        y="0"
        width="800"
        height="100"
      />
      <line
        x1={-400}
        y1={0}
        x2={400}
        y2={0}
        style={division}
      />
    </g>
  );
};

export default Ground;
