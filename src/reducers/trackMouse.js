import { calculateAngle } from '../utils/formulas';

function trackMouse(state, action) {
  const { x, y } = action.position;
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    angle,
    mousePosition: action.position,
  };
}

export default trackMouse;
