import { calculateNextposition } from '../utils/formulas';

function moveDiscs(state) {
  let flyingDiscs = state.flyingDiscs.filter(disc => (disc.position.y < 100));
  const lostLife = state.flyingDiscs.length !== flyingDiscs.length;
  flyingDiscs = flyingDiscs.map((disc) => {
    const { x, y } = disc.position;
    const { angle } = disc;
    const position = calculateNextposition(x, y, angle);
    return {
      ...disc,
      position,
    };
  });

  const lifes = [...state.lifes];
  if (lostLife) {
    lifes.pop();
  }

  const gameStarted = lifes.length > 0;
  if (!gameStarted) {
    flyingDiscs = [];
  }

  return {
    ...state,
    flyingDiscs,
    gameStarted,
    lifes,
  };
}

export default moveDiscs;
