import React from 'react';
import PropTypes from 'prop-types';
import Position from '../../utils/Position';
import {gameLeftmostXPoint, gameRightmostXPoint, gameUppermostPoint} from "../../utils/constants";

const VisualClues = (props) => {
  if (!props.visible || !props.position) return null;

  const lineStyle = {
    stroke: 'black',
    strokeWidth: '2',
  };
  return (
    <g>
      <line
        x1={gameLeftmostXPoint}
        y1={0}
        x2={gameRightmostXPoint}
        y2={0}
        style={lineStyle}
      />
      <line
        x1={0}
        y1={gameUppermostPoint}
        x2={0}
        y2={gameRightmostXPoint}
        style={lineStyle}
      />
      <line
        x1={0}
        y1={0}
        x2={props.position.x}
        y2={props.position.y}
        style={lineStyle}
      />
    </g>
  );
};

VisualClues.propTypes = {
  visible: PropTypes.bool.isRequired,
  position: PropTypes.instanceOf(Position).isRequired,
};

export default VisualClues;
