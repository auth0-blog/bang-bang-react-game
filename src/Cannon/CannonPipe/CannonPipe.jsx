import React from 'react';
import PropTypes from 'prop-types';

const CannonPipe = (props) => {
  const cannonPipeStyle = {
    fill: '#595959',
  };
  const rotation = 0;
  const transform = `rotate(${rotation}, ${props.xAxis}, ${props.yAxis})`;
  return (
    <g id="cannon" transform={transform}>
      <ellipse
        style={cannonPipeStyle}
        cx={props.xAxis}
        cy={props.yAxis}
        rx="40"
        ry="40"
      />
      <rect
        style={cannonPipeStyle}
        x={props.xAxis - 40}
        y={props.yAxis - 100}
        width="80"
        height="100"
      />
    </g>
  );
};

CannonPipe.propTypes = {
  xAxis: PropTypes.number.isRequired,
  yAxis: PropTypes.number.isRequired,
};

export default CannonPipe;
