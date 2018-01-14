import Position from '../utils/Position';

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

export default shoot;
