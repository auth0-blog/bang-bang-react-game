import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../../../utils/formulas';

const CannonPipe = (props) => {
  const cannonPipeStyle = {
    fill: '#999',
    stroke: '#666',
    strokeWidth: '2px',
  };
  const transform = `rotate(${props.rotation}, ${props.xAxis}, ${props.yAxis})`;

  const muzzleWidth = 40;
  const halfMuzzle = 20;
  const height = 100;
  const yBasis = 70;

  const cubicBezierCurve = {
    initialAxis: {
      x: props.xAxis - halfMuzzle,
      y: -yBasis,
    },
    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },
    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },
    endingAxis: {
      x: muzzleWidth,
      y: 0,
    },
  };

  return (
    <g transform={transform}>
      <path
        style={cannonPipeStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={props.xAxis - halfMuzzle}
        y1={-yBasis}
        x2={props.xAxis + halfMuzzle}
        y2={-yBasis}
        style={cannonPipeStyle}
      />
    </g>
  );
};

CannonPipe.propTypes = {
  xAxis: PropTypes.number.isRequired,
  yAxis: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
};

export default CannonPipe;
