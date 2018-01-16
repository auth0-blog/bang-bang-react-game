import React from 'react';
import PropTypes from 'prop-types';
import { gameHeight, gameLeftmostXPoint, gameUppermostPoint, gameWidth } from '../../utils/constants';

const Canvas = (props) => {
  const viewBox = [gameLeftmostXPoint, gameUppermostPoint, gameWidth, gameHeight];
  const style = {
    maxWidth: '400px',
    height: 'auto',
  };
  return (
    <svg
      id="my-super-canvas"
      className="bang-bang-canvas"
      viewBox={viewBox}
      style={style}
      preserveAspectRatio="xMaxYMax meet"
      onMouseMove={props.trackMouse}
      onClick={props.mouseClicked}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
        <filter id="big-shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="4" />
        </filter>
      </defs>
      {props.children}
    </svg>
  );
};

Canvas.propTypes = {
  children: PropTypes.node.isRequired,
  trackMouse: PropTypes.func.isRequired,
  mouseClicked: PropTypes.func.isRequired,
};

export default Canvas;
