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
          id="hill-left-done"
          style={groundStyle}
          d="M975,687C817,644.63,764.39,551.22,524.72,522.32,282.22,493.09,123.46,610.92,0,687"
          transform="translate(0 1)"
        />
      </g>
      <g id="hil-right">
        <path
          style={groundStyle}
          d="M1263.5,558C1072.13,558,964,654.5,885,707
          c-52.67,35,187.13,80,378.5,80,152.79,0,288.85-25.35,337.5-67.75
          V646.32C1552.35,598,1416.29,558,1263.5,558Z"
          transform="translate(0 1)"
        />
      </g>
    </g>
  );
};

export default Ground;
