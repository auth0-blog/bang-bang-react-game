import React from 'react';
import PropTypes from 'prop-types';

const Canvas = (props) => {
  const viewBox = '-400, -700, 800, 800';
  const style = {
    width: '400px',
    height: '400px',
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
