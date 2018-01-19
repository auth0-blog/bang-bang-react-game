import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../../utils/constants';

const Login = (props) => {
  const button = {
    x: gameWidth / -2, // half width
    y: -500, // minus means up (above 0)
    width: gameWidth,
    height: 400,
    rx: 10, // border radius
    ry: 10, // border radius
    style: {
      fill: 'blue',
      cursor: 'pointer',
    },
    onClick: props.authenticate,
  };

  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: -200, // 200 up
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 60,
      fill: '#e3e3e3',
      cursor: 'pointer',
    },
    onClick: props.authenticate,
  };

  return (
    <g filter="url(#big-shadow)">
      <rect {...button} />
      <text {...text}>
        Tap To Start!
      </text>
    </g>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
