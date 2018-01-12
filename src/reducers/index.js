import {SHOOT, MOVE_MOUSE, MOVE_BALL, MOVE_DISC, ADD_FLYING_DISC, DESTROY_DISC} from '../actions';
import Position from '../utils/Position';
import { calculateAngle, calculateNextposition } from '../utils/formulas';

const initialState = {
  cannonBalls: [],
  flyingDiscs: [],
  mousePosition: new Position(0, 0),
  angle: 45,
};

const predefinedPositions = [
  -300,
  -150,
  150,
  300,
];

function shoot(state, action) {
  const { cannonBalls } = state;
  const { angle } = action;
  const id = (new Date()).getTime();
  const cannonBall = {
    position: new Position(0, 0),
    angle,
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

// reference https://answers.unity.com/questions/491719/how-to-calculate-a-new-position-having-angle-and-d.html
function moveBall(state, action) {
  const movingBalls = state.cannonBalls.filter(ball => (ball.id !== action.id));
  const movingBall = state.cannonBalls.find(ball => (ball.id === action.id));

  if (!movingBall) {
    // destroyed when hitting flying disc
    return state;
  }

  const { x, y } = movingBall.position;
  const { angle } = movingBall;
  movingBall.position = calculateNextposition(x, y, angle);

  const cannonBalls = [...movingBalls];
  if (movingBall.position.y > -800 && movingBall.position.x > -500 && movingBall.position.x < 500) {
    cannonBalls.push(movingBall);
  }

  return {
    ...state,
    cannonBalls,
  };
}

function addFlyingDisc(state) {
  const { flyingDiscs } = state;
  if (flyingDiscs.length === 1) return state;
  const id = (new Date()).getTime();
  const predefinedPosition = Math.floor(Math.random() * 4);
  const discPosition = predefinedPositions[predefinedPosition];
  const newFlyingDisc = {
    position: new Position(discPosition, -700),
    angle: 180,
    id,
  };
  return {
    ...state,
    flyingDiscs: [...flyingDiscs, newFlyingDisc],
  };
}

function moveDisc(state, action) {
  const movingDiscs = state.flyingDiscs.filter(disc => (disc.id !== action.id));
  const movingDisc = state.flyingDiscs.find(disc => (disc.id === action.id));

  if (!movingDisc) {
    // destroyed when hit by cannon ball
    return state;
  }


  const { x, y } = movingDisc.position;
  const { angle } = movingDisc;
  movingDisc.position = calculateNextposition(x, y, angle);

  const flyingDiscs = [...movingDiscs];
  if (movingDisc.position.y < 100) {
    flyingDiscs.push(movingDisc);
  }

  return {
    ...state,
    flyingDiscs,
  };
}

function destroyDiscs(state, action) {
  const { objectsDestroyed } = action;

  const discsDestroyed = objectsDestroyed.map(object => (object.discId));
  const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));

  const flyingDiscs = state.flyingDiscs.filter(disc => (discsDestroyed.indexOf(disc.id) >= 0));
  const cannonBalls = state.cannonBalls
    .filter(ball => (cannonBallsDestroyed.indexOf(ball.id) >= 0));

  return {
    ...state,
    flyingDiscs,
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
    case MOVE_DISC:
      return moveDisc(state, action);
    case ADD_FLYING_DISC:
      return addFlyingDisc(state);
    case DESTROY_DISC:
      return destroyDiscs(state, action);
    default:
      return state;
  }
}

export default reducer;
