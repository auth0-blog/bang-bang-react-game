import { connect } from 'react-redux';
import { shoot, createAndMove, startGame, moveObjects, loadLeaderboard, addMember, removeMember } from '../actions';
import App from '../App';

const mapStateToProps = state => ({
  angle: state.angle,
  cannonBalls: state.cannonBalls,
  flyingDiscs: state.flyingDiscs,
  lastDiscCreatedAt: state.lastDiscCreatedAt,
  gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
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
    loadLeaderboard(leaderboard);
  },
  addMember: (member) => {
    addMember(member);
  },
  removeMember: (member) => {
    removeMember(member);
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
