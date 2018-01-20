const removeMember = (state, action) => {
  const leaderboard = state.leaderboard.filter(member => (member.id !== action.member.id));
  return {
    ...state,
    leaderboard,
  };
};

export default removeMember;
