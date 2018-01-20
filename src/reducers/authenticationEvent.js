const authenticationEvent = (state, action) => ({
  ...state,
  me: action.me,
});

export default authenticationEvent;
