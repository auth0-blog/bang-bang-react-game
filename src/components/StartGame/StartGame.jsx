import React from 'react';
import PropTypes from 'prop-types';

const StartGame = (props) => {
  const buttonStyle = {
    fill: '#ccc',
    cursor: 'pointer',
  };
  const textStyle = {
    fontFamily: 'Verdana',
    fontSize: '35',
    fill: '#555',
    cursor: 'pointer',
  };
  return (
    <g filter="url(#big-shadow)">
      <rect
        style={buttonStyle}
        x={-145}
        y={-245}
        width={290}
        height={70}
        rx={10}
        ry={10}
        onClick={props.onClick}
      />
      <text textAnchor="middle" x="0" y="-198" style={textStyle} onClick={props.onClick}>
        New Game
      </text>
    </g>
  );
};

StartGame.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartGame;
