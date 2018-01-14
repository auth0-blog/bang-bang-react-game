import { calculateNextposition } from '../utils/formulas';

// reference https://answers.unity.com/questions/491719/how-to-calculate-a-new-position-having-angle-and-d.html
function moveBall(state, action) {
  const movingBalls = state.cannonBalls.filter(ball => (ball.id !== action.id));
  const movingBall = state.cannonBalls.find(ball => (ball.id === action.id));

  if (!movingBall) {
    // destroyed when hitting flying disc
    return state;
  }

  const { x, y } = movingBall.position;
  const { angle } = movingBall;
  movingBall.position = calculateNextposition(x, y, angle);

  const cannonBalls = [...movingBalls];
  if (movingBall.position.y > -800 && movingBall.position.x > -500 && movingBall.position.x < 500) {
    cannonBalls.push(movingBall);
  }

  return {
    ...state,
    cannonBalls,
  };
}

export default moveBall;
