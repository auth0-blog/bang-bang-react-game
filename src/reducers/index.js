import { SHOOT, MOVE_MOUSE } from '../actions';
import Position from '../utils/Position';
import { calculateAngle } from '../utils/formulas';

const initialState = {
  cannonBalls: [],
  mousePosition: new Position(0, 0),
  angle: 45,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOOT:
      const { cannonBalls } = state;
      const key = (new Date()).getTime();
      cannonBalls.push({
        position: action.position,
        key,
      });
      return {
        ...state,
        cannonBalls,
      };
    case MOVE_MOUSE:
      const { x, y } = action.position;
      const angle = calculateAngle(0, 0, x, y);
      return {
        ...state,
        angle,
        mousePosition: action.position,
      };
    default:
      return state;
  }
}

export default reducer;
