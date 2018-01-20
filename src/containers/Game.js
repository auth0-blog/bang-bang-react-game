import { connect } from 'react-redux';
import {
  shoot, createAndMove, startGame, moveObjects, loadLeaderboard, addMember, removeMember,
  authenticationEvent,
} from '../actions';
import App from '../App';

const mapStateToProps = state => ({
  angle: state.angle,
  authenticated: state.authenticated,
  cannonBalls: state.cannonBalls,
  flyingDiscs: state.flyingDiscs,
  lastDiscCreatedAt: state.lastDiscCreatedAt,
  gameState: state.gameState,
  leaderboard: state.leaderboard,
});

const mapDispatchToProps = dispatch => ({
  authenticationEvent: (authenticated) => {
    dispatch(authenticationEvent(authenticated));
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
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
