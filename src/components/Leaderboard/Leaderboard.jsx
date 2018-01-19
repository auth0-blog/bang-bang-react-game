import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';

const Leaderboard = (props) => {
  const style = {
    fill: 'transparent',
    stroke: 'black',
    strokeDasharray: '15',
  };
  return (
    <g>
      <rect style={style} x="-300" y="-600" width="600" height="300" />
      <Login authenticate={props.authenticate} />
    </g>
  );
};

Leaderboard.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Leaderboard;
