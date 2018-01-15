import { calculateNextposition } from '../utils/formulas';

// reference https://answers.unity.com/questions/491719/how-to-calculate-a-new-position-having-angle-and-d.html
const moveBalls = cannonBalls => (
  cannonBalls
    .filter(cannonBall => (
      cannonBall.position.y > -800 && cannonBall.position.x > -500 && cannonBall.position.x < 500
    ))
    .map((cannonBall) => {
      const { x, y } = cannonBall.position;
      const { angle } = cannonBall;
      return {
        ...cannonBall,
        position: calculateNextposition(x, y, angle, 5),
      };
    })
);

export default moveBalls;
