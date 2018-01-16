import moveBalls from './moveBalls';
import checkCollisions from '../utils/checkCollisions';
import trackMouse from './trackMouse';

function moveObjects(state, action) {
  let cannonBalls = moveBalls(state.cannonBalls);
  let { flyingDiscs } = state;

  const lostLife = state.flyingDiscs.length !== flyingDiscs.length;
  const lifes = [...state.lifes];
  if (lostLife) {
    lifes.pop();
  }

  const objectsDestroyed = checkCollisions(cannonBalls, flyingDiscs);
  const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));

  cannonBalls = cannonBalls.filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)));
  flyingDiscs = flyingDiscs.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

  const gameStarted = lifes.length >= 0;
  if (!gameStarted) {
    flyingDiscs = [];
    cannonBalls = [];
  }

  return trackMouse({
    ...state,
    cannonBalls,
    flyingDiscs,
    gameStarted,
    lifes,
  }, action);
}

export default moveObjects;
