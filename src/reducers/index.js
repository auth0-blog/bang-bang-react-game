import { SHOOT, MOVE_MOUSE, MOVE_BALL, MOVE_DISCS, CREATE_AND_MOVE, DESTROY_DISC, START_GAME } from '../actions';
import Position from '../utils/Position';
import trackMouse from './trackMouse';
import shoot from './shoot';
import moveBall from './moveBall';
import destroyDiscs from './destroyDiscs';
import moveDiscs from './moveDiscs';
import createAndMove from './createAndMove';
import startGame from './startGame';

const initialState = {
  angle: 45,
  cannonBalls: [],
  flyingDiscs: [],
  gameStarted: false,
  lastDiscCreatedAt: new Date(),
  lifes: [0, 1, 2],
  mousePosition: new Position(0, 0),
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOOT:
      return shoot(state, action);
    case MOVE_MOUSE:
      return trackMouse(state, action);
    case MOVE_BALL:
      return moveBall(state, action);
    case MOVE_DISCS:
      return moveDiscs(state, action);
    case CREATE_AND_MOVE:
      return createAndMove(state);
    case DESTROY_DISC:
      return destroyDiscs(state, action);
    case START_GAME:
      return startGame(state);
    default:
      return state;
  }
}

export default reducer;
