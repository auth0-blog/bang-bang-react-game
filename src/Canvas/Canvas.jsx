import React from 'react';
import PropTypes from 'prop-types';
import './Canvas.css';

const Canvas = (props) => {
  const viewBox = '0, 0, 1600, 800';
  return (
    <svg
      className="bang-bang-canvas"
      viewBox={viewBox}
      preserveAspectRatio="xMaxYMax meet"
      onMouseMove={props.trackMouse}
    >
      {props.children}
    </svg>
  );
};

Canvas.propTypes = {
  children: PropTypes.node.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
