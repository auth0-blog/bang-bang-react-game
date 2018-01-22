import { connect } from 'react-redux';
import {
  shoot, createAndMove, startGame, moveObjects, loadLeaderboard, addMember, removeMember,
  authenticationEvent, newMaxScore,
} from '../actions';
import App from '../App';

const mapStateToProps = state => ({
  angle: state.angle,
  me: state.me,
  cannonBalls: state.cannonBalls,
  flyingDiscs: state.flyingDiscs,
  lastDiscCreatedAt: state.lastDiscCreatedAt,
  gameState: state.gameState,
  leaderboard: state.leaderboard,
});

const mapDispatchToProps = dispatch => ({
  authenticationEvent: (me) => {
    dispatch(authenticationEvent(me));
  },
  createAndMove: (mousePosition) => {
    dispatch(createAndMove(mousePosition));
  },
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
  shoot: (mousePosition) => {
    dispatch(shoot(mousePosition));
  },
  startGame: () => {
    dispatch(startGame());
  },
  loadLeaderboard: (leaderboard) => {
    dispatch(loadLeaderboard(leaderboard));
  },
  addMember: (member) => {
    dispatch(addMember(member));
  },
  removeMember: (member) => {
    dispatch(removeMember(member));
  },
  newMaxScore: (maxScore) => {
    dispatch(newMaxScore(maxScore));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
