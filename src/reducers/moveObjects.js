import moveBalls from './moveBalls';
import checkCollisions from '../utils/checkCollisions';
import trackMouse from './trackMouse';

function moveObjects(state, action) {
  let cannonBalls = moveBalls(state.cannonBalls);
  const now = (new Date()).getTime();
  let flyingDiscs = state.flyingDiscs.filter(disc => (
    (now - disc.createdAt) < 4000
  ));

  const lostLife = state.flyingDiscs.length !== flyingDiscs.length;
  const lives = [...state.gameState.lives];
  if (lostLife) {
    lives.pop();
  }

  const objectsDestroyed = checkCollisions(cannonBalls, flyingDiscs);
  const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));
  const kills = state.gameState.kills + flyingDiscsDestroyed.length;

  cannonBalls = cannonBalls.filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)));
  flyingDiscs = flyingDiscs.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

  const started = lives.length > 0;
  if (!started) {
    flyingDiscs = [];
    cannonBalls = [];
  }

  const gameState = {
    ...state.gameState,
    started,
    lives,
    kills,
  };

  return trackMouse({
    ...state,
    cannonBalls,
    flyingDiscs,
    gameState,
  }, action);
}

export default moveObjects;
