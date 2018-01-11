import React from 'react';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  return (
    <g id="sky">
      <rect
        style={skyStyle}
        x="-400"
        y="-700"
        width="800"
        height="800"
      />
    </g>
  );
};

export default Sky;
