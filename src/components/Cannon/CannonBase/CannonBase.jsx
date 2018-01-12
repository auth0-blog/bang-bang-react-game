import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../../../utils/formulas';

const CannonBase = (props) => {
  const cannonBaseStyle = {
    fill: '#a16012',
    stroke: '#75450e',
    strokeWidth: '2px',
  };

  const baseWith = 80;
  const halfBase = 40;
  const height = 60;
  const negativeHeight = height * -1;

  const cubicBezierCurve = {
    initialAxis: {
      x: props.xAxis - halfBase,
      y: props.yAxis + height,
    },
    initialControlPoint: {
      x: 20,
      y: negativeHeight,
    },
    endingControlPoint: {
      x: 60,
      y: negativeHeight,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <g>
      <path
        style={cannonBaseStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={props.xAxis - halfBase}
        y1={props.yAxis + height}
        x2={props.xAxis + halfBase}
        y2={props.yAxis + height}
        style={cannonBaseStyle}
      />
    </g>
  );
};

CannonBase.propTypes = {
  xAxis: PropTypes.number.isRequired,
  yAxis: PropTypes.number.isRequired,
};

export default CannonBase;
