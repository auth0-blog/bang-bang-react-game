import { calculateNextposition } from '../utils/formulas';

const moveDiscs = flyingDiscs => (
  flyingDiscs.filter(disc => (disc.position.y < 100))
    .map((disc) => {
      const { x, y } = disc.position;
      const { angle } = disc;
      const position = calculateNextposition(x, y, angle);
      return {
        ...disc,
        position,
      };
    })
);

export default moveDiscs;
