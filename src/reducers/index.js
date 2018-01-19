import {
  SHOOT, CREATE_AND_MOVE, START_GAME, MOVE_OBJECTS,
  ADD_MEMBER, LOAD_LEADERBOARD, REMOVE_MEMBER,
} from '../actions';
import Position from '../utils/Position';
import shoot from './shoot';
import moveObjects from './moveObjects';
import createAndMove from './createAndMove';
import startGame from './startGame';
import addMember from './addMember';
import loadLeaderboard from './loadLeaderboard';
import removeMember from './removeMember';

const initialState = {
  angle: 45,
  cannonBalls: [],
  flyingDiscs: [],
  leaderboard: [],
  gameState: {
    started: false,
    kills: 0,
    lives: [0, 1, 2],
  },
  lastDiscCreatedAt: new Date(),
  mousePosition: new Position(0, 0),
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOOT:
      return shoot(state, action);
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case CREATE_AND_MOVE:
      return createAndMove(state, action);
    case START_GAME:
      return startGame({
        ...state,
        ...initialState,
      });
    case ADD_MEMBER:
      return addMember({
        ...state,
        member: action.member,
      });
    case LOAD_LEADERBOARD:
      return loadLeaderboard(state, action);
    case REMOVE_MEMBER:
      return removeMember({
        ...state,
        member: action.member,
      });
    default:
      return state;
  }
}

export default reducer;
