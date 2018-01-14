import { checkCollision } from './formulas';

const checkCollisions = (cannonBalls, flyingDiscs) => {
  const objectsDestroyed = [];
  flyingDiscs.forEach((disc) => {
    const rectA = {
      x1: disc.position.x - 40,
      y1: disc.position.y - 10,
      x2: disc.position.x + 40,
      y2: disc.position.y + 10,
    };
    cannonBalls.forEach((ball) => {
      const rectB = {
        x1: ball.position.x - 8,
        y1: ball.position.y - 8,
        x2: ball.position.x + 8,
        y2: ball.position.y + 8,
      };
      if (checkCollision(rectA, rectB)) {
        objectsDestroyed.push({
          disc, ball,
        });
      }
    });
  });
  return objectsDestroyed;
};

export default checkCollisions;
