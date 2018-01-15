import { SHOOT, MOVE_MOUSE, MOVE_BALL, MOVE_DISC, ADD_FLYING_DISC, DESTROY_DISC, START_GAME } from '../actions';
import Position from '../utils/Position';
import trackMouse from './trackMouse';
import shoot from './shoot';
import moveBall from './moveBall';
import destroyDiscs from './destroyDiscs';
import moveDisc from './moveDisc';
import addFlyingDisc from './addFlyingDisc';
import startGame from './startGame';

const initialState = {
  cannonBalls: [],
  flyingDiscs: [],
  lifes: [0, 1, 2],
  gameStarted: false,
  mousePosition: new Position(0, 0),
  angle: 45,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOOT:
      return shoot(state, action);
    case MOVE_MOUSE:
      return trackMouse(state, action);
    case MOVE_BALL:
      return moveBall(state, action);
    case MOVE_DISC:
      return moveDisc(state, action);
    case ADD_FLYING_DISC:
      return addFlyingDisc(state);
    case DESTROY_DISC:
      return destroyDiscs(state, action);
    case START_GAME:
      return startGame(state);
    default:
      return state;
  }
}

export default reducer;
