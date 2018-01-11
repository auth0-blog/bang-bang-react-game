import { SHOOT, MOVE_MOUSE, MOVE_BALL } from '../actions';
import Position from '../utils/Position';
import { calculateAngle } from '../utils/formulas';

const initialState = {
  cannonBalls: [],
  mousePosition: new Position(0, 0),
  angle: 45,
};

function shoot(state, action) {
  const { cannonBalls } = state;
  const id = (new Date()).getTime();
  const cannonBall = {
    position: action.position,
    id,
  };
  return {
    ...state,
    cannonBalls: [...cannonBalls, cannonBall],
  };
}

function moveMouse(state, action) {
  const { x, y } = action.position;
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    angle,
    mousePosition: action.position,
  };
}

function moveBall(state, action) {
  const movingBalls = state.cannonBalls.filter(ball => (ball.id !== action.id));
  const movingBall = state.cannonBalls.find(ball => (ball.id === action.id));
  const { x, y } = action.position;
  movingBall.position = new Position(x, y);

  const cannonBalls = [...movingBalls];
  if (movingBall.position.y > -500) {
    cannonBalls.push(movingBall);
  }

  return {
    ...state,
    cannonBalls,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOOT:
      return shoot(state, action);
    case MOVE_MOUSE:
      return moveMouse(state, action);
    case MOVE_BALL:
      return moveBall(state, action);
    default:
      return state;
  }
}

export default reducer;
