import moveBalls from './moveBalls';
import moveDiscs from './moveDiscs';
import checkCollisions from '../utils/checkCollisions';

function moveObjects(state) {
  let cannonBalls = moveBalls(state.cannonBalls);
  let flyingDiscs = moveDiscs(state.flyingDiscs);

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

  const gameStarted = lifes.length > 0;
  if (!gameStarted) {
    flyingDiscs = [];
    cannonBalls = [];
  }

  return {
    ...state,
    cannonBalls,
    flyingDiscs,
    gameStarted,
    lifes,
  };
}

export default moveObjects;
