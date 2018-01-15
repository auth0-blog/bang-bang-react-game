import { SHOOT, MOVE_MOUSE, CREATE_AND_MOVE, START_GAME, MOVE_OBJECTS } from '../actions';
import Position from '../utils/Position';
import trackMouse from './trackMouse';
import shoot from './shoot';
import moveObjects from './moveObjects';
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
    case MOVE_OBJECTS:
      return moveObjects(state);
    case CREATE_AND_MOVE:
      return createAndMove(state);
    case START_GAME:
      return startGame(state);
    default:
      return state;
  }
}

export default reducer;
