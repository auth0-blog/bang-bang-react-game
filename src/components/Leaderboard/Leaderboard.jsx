import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import Position from '../../utils/Position';

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

  const pictureStyle = {
    height: 60,
    width: 60,
  };

  const usernameStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 40,
  };
  return (
    <g>
      <text filter="url(#big-shadow)" style={leaderboardTitle} x="-150" y="-620">Leaderboard</text>
      <rect style={style} x="-300" y="-600" width="600" height="300" />
      {
        props.authenticated && props.leaderboard.map((member, idx) => {
          const memberBaseYAxis = -520;
          const textAxisY = memberBaseYAxis + (idx * 75);
          const pictureAxisX = -100;
          const pictureAxisY = textAxisY - 40;
          const frameProperties = {
            width: 55,
            height: 55,
            rx: 30,
            x: pictureAxisX,
            y: pictureAxisY,
          };
          const pictureProperties = {
            style: pictureStyle,
            x: pictureAxisX,
            y: pictureAxisY,
            href: member.picture,
            clipPath: 'url(#clip)',
          };
          return (
            <g key={member.id}>
              <defs>
                <rect id="rect" {...frameProperties} />
                <clipPath id="clip">
                  <use xlinkHref="#rect" />
                </clipPath>
              </defs>
              <use xlinkHref="#rect" strokeWidth="2" stroke="black" />
              <text style={usernameStyle} x="-280" y={textAxisY}>{idx + 1}º –</text>
              <text style={usernameStyle} x="-200" y={textAxisY}>{member.maxScore} kills</text>
              <image {...pictureProperties} />
              <text style={usernameStyle} x="-100" y={textAxisY}>{member.name}</text>
            </g>
          );
        })
      }
      {
        !props.authenticated && <Login authenticate={props.authenticate} />
      }
    </g>
  );
};

Leaderboard.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
  leaderboard: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
};

export default Leaderboard;
