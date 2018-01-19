const loadLeaderboard = (state, action) => {
  const { members } = action;
  return {
    ...state,
    members,
  };
};

export default loadLeaderboard;
