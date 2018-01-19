import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';

const Leaderboard = (props) => {
  const style = {
    fill: 'transparent',
    stroke: 'black',
    strokeDasharray: '15',
  };

  const leaderboardTitle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 50,
    fill: '#88da85',
    cursor: 'default',
  };
  return (
    <g>
      <text filter="url(#big-shadow)" style={leaderboardTitle} x="-150" y="-620">Leaderboard</text>
      <rect style={style} x="-300" y="-600" width="600" height="300" />
      {
        props.leaderboard.map(member => (
          <g key={member.id}>
            <image x="-250" y="-550" href={member.picture} height="75" width="75" />
            <text fontSize={50} x="-50" y="-500">{member.name}</text>
          </g>
        ))
      }
      <Login authenticate={props.authenticate} />
    </g>
  );
};

Leaderboard.propTypes = {
  authenticate: PropTypes.func.isRequired,
  leaderboard: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
};

export default Leaderboard;
