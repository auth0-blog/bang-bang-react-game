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
    color: '#fcb3a4',
    width: '100%',
    textAlign: 'center',
    overflowY: 'scroll',
  };

  const leaderboard = props.leaderboard.filter((member, index) => (index < 3 ? member : null));
  return (
    <g>
      <text filter="url(#big-shadow)" style={leaderboardTitle} x="-150" y="-630">Leaderboard</text>
      <rect style={style} x="-300" y="-600" width="600" height="300" />
      <foreignObject x="-260" y="-570" width="560" height="200" filter="url(#shadow)">
        <div>
          <table style={membersTableStyle}>
            {
              props.me !== null && (
                <thead>
                  <tr>
                    <td style={{ width: '60px' }}>pos</td>
                    <td style={{ width: '60px' }}>kills</td>
                    <td style={{ width: '200px' }}>name</td>
                  </tr>
                </thead>
              )
            }
            <tbody>
              {
                props.me !== null && leaderboard.map((member, idx) => (
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
        props.me === null && <Login authenticate={props.authenticate} />
      }
    </g>
  );
};

Leaderboard.propTypes = {
  me: PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  authenticate: PropTypes.func.isRequired,
  leaderboard: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
};

export default Leaderboard;
