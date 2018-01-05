import React from 'react';
import PropTypes from 'prop-types';

function convertToPath(cubicBezierCurve) {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis,
  } = cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
}

const CannonBase = (props) => {
  const cannonBaseStyle = {
    stroke: '#000000',
  };

  const baseWith = 100;
  const halfBase = 50;
  const height = 60;
  const negativeHeight = height * -1;

  const cubicBezierCurve = {
    initialAxis: {
      x: props.xAxis - halfBase,
      y: props.yAxis + height,
    },
    initialControlPoint: {
      x: 25,
      y: negativeHeight,
    },
    endingControlPoint: {
      x: 75,
      y: negativeHeight,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <path
      style={cannonBaseStyle}
      d={convertToPath(cubicBezierCurve)}
    />
  );
};

CannonBase.propTypes = {
  xAxis: PropTypes.number.isRequired,
  yAxis: PropTypes.number.isRequired,
};

export default CannonBase;
