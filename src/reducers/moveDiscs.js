import { calculateNextposition } from '../utils/formulas';

const moveDiscs = flyingDiscs => (
  flyingDiscs.filter(disc => (disc.calculatedPosition.y < 100))
    .map((disc) => {
      const { x, y } = disc.calculatedPosition;
      const { angle } = disc;
      const calculatedPosition = calculateNextposition(x, y, angle);
      return {
        ...disc,
        calculatedPosition,
      };
    })
);

export default moveDiscs;
