import Position from '../utils/Position';
import trackMouse from './trackMouse';

function shoot(state, action) {
  const newState = trackMouse(state, action);
  const { cannonBalls, angle } = newState;
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
