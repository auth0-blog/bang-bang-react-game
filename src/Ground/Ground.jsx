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
        x="0.5"
        y="687.5"
        width="1600"
        height="113"
      />

      <g id="hill-left">
        <path
          style={groundStyle}
          d="M790,686.5c0-94.44-111-171-248-171s-248,76.56-248,171"
          transform="translate(0 1)"
        />
      </g>
    </g>
  );
};

export default Ground;
