import React from 'react';

const Ground = () => {
  const groundStyle = {
    fill: '#27822c',
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
    </g>
  );
};

export default Ground;
