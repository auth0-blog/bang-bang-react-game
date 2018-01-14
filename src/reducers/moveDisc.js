import { calculateNextposition } from '../utils/formulas';

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

export default moveDisc;
