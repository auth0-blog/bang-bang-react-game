import React from 'react';
import PropTypes from 'prop-types';

const StartGame = (props) => {
  const button = {
    x: -145, // half width
    y: -250, // minus means up (above 0)
    width: 290,
    height: 70,
    rx: 10, // border radius
    ry: 10, // border radius
    style: {
      fill: '#ccc',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };

  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: -200, // 200 up
    style: {
      fontFamily: 'Verdana',
      fontSize: 35,
      fill: '#555',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g filter="url(#big-shadow)">
      <rect {...button} />
      <text {...text}>
        New Game
      </text>
    </g>
  );
};

StartGame.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartGame;
