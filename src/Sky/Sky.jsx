import React from 'react';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  return (
    <g id="sky">
      <rect
        style={skyStyle}
        x="0"
        y="0"
        width="1600"
        height="800"
      />
    </g>
  );
};

export default Sky;
