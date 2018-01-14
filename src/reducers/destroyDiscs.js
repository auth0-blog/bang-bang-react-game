function destroyDiscs(state, action) {
  const { objectsDestroyed } = action;

  const discsDestroyed = objectsDestroyed.map(object => (object.disc.id));
  const cannonBallsDestroyed = objectsDestroyed.map(object => (object.ball.id));

  const flyingDiscs = state.flyingDiscs.filter(disc => (discsDestroyed.indexOf(disc.id) < 0));
  const cannonBalls = state.cannonBalls
    .filter(ball => (cannonBallsDestroyed.indexOf(ball.id) < 0));

  if (flyingDiscs.length === state.flyingDiscs.length) {
    return state;
  }

  return {
    ...state,
    flyingDiscs,
    cannonBalls,
  };
}

export default destroyDiscs;
