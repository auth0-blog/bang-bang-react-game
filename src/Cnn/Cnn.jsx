import React from 'react';

const Cnn = () => {
  const cannonPipeStyle = {
    fill: '#595959',
  };

  const cannonBaseStyle = {
    stroke: '#000000',
  };

  return (
    <g id="cannon">
      <ellipse
        style={cannonPipeStyle}
        cx="123.91"
        cy="686.29"
        rx="34.5"
        ry="36"
        transform="translate(-434.13 269.03) rotate(-42.91)"
      />
      <rect
        style={cannonPipeStyle}
        x="118.31"
        y="616.04"
        width="72"
        height="84"
        transform="translate(531.18 97.98) rotate(47.09)"
      />
      <path
        style={cannonBaseStyle}
        d="M121,741h56.5c0-29.35-25.51-53.5-56.5-53.5S64.5,711.65,64.5,741Z"
        transform="translate(0 1)"
      />
    </g>
  );
};

export default Cnn;
