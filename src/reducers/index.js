import { SHOOT } from '../actions';

const initialState = {
  cannonBalls: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOOT:
      const { cannonBalls } = state;
      cannonBalls.push(action.position);
      return {
        ...state,
        cannonBalls,
      };
    default:
      return state;
  }
}

export default reducer;
