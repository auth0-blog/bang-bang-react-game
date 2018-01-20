const authenticationEvent = (state, action) => ({
  ...state,
  authenticated: action.authenticated,
});

export default authenticationEvent;
