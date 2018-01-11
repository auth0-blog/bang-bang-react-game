import { SHOOT } from '../actions';

const initialState = {
  cannonBalls: [],
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
    default:
      return state;
  }
}

export default reducer;
