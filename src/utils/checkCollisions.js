import { checkCollision } from './formulas';

const checkCollisions = (cannonBalls, flyingDiscs) => {
  const objectsDestroyed = [];
  flyingDiscs.forEach((flyingDisc) => {
    const rectA = {
      x1: flyingDisc.calculatedPosition.x - 40,
      y1: flyingDisc.calculatedPosition.y - 10,
      x2: flyingDisc.calculatedPosition.x + 40,
      y2: flyingDisc.calculatedPosition.y + 10,
    };
    cannonBalls.forEach((cannonBall) => {
      const rectB = {
        x1: cannonBall.position.x - 8,
        y1: cannonBall.position.y - 8,
        x2: cannonBall.position.x + 8,
        y2: cannonBall.position.y + 8,
      };
      if (checkCollision(rectA, rectB)) {
        objectsDestroyed.push({
          cannonBallId: cannonBall.id,
          flyingDiscId: flyingDisc.id,
        });
      }
    });
  });
  return objectsDestroyed;
};

export default checkCollisions;
