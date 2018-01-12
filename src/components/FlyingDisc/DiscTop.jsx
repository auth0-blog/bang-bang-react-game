import React from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';
import { pathFromBezierCurve } from '../../utils/formulas';

const DiscTop = (props) => {
  const discTopStyle = {
    fill: '#b6b6b6',
    stroke: '#7d7d7d',
  };

  const baseWith = 40;
  const halfBase = 20;
  const height = 25;

  const cubicBezierCurve = {
    initialAxis: {
      x: props.position.x - halfBase,
      y: props.position.y,
    },
    initialControlPoint: {
      x: 10,
      y: -height,
    },
    endingControlPoint: {
      x: 30,
      y: -height,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <path
      style={discTopStyle}
      d={pathFromBezierCurve(cubicBezierCurve)}
    />
  );
};

DiscTop.propTypes = {
  position: PropTypes.instanceOf(Position).isRequired,
};

export default DiscTop;
