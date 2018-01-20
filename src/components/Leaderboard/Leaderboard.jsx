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

  const membersTableStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 35,
    width: '100%',
    textAlign: 'center',
    overflowY: 'scroll',
  };

  const leaderboard = props.leaderboard.filter((member, index) => (index < 2 ? member : null));
  return (
    <g>
      <text filter="url(#big-shadow)" style={leaderboardTitle} x="-150" y="-620">Leaderboard</text>
      <rect style={style} x="-300" y="-600" width="600" height="300" />
      <foreignObject x="-280" y="-580" width="560" height="200">
        <div>
          <table style={membersTableStyle}>
            {
              props.authenticated && (
                <thead>
                  <tr>
                    <td style={{ width: '50px' }}>pos</td>
                    <td style={{ width: '50px' }}>kills</td>
                    <td style={{ width: '200px' }}>name</td>
                  </tr>
                </thead>
              )
            }
            <tbody>
              {
                props.authenticated && leaderboard.map((member, idx) => (
                  <tr key={member.id}>
                    <td>{idx + 1}º</td>
                    <td>{member.maxScore}</td>
                    <td>{member.name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </foreignObject>
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
