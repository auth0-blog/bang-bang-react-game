const addMember = (state, action) => {
  const leaderboard = [...state.leaderboard];
  leaderboard.push({
    id: action.member.id,
    ...action.member.info,
  });
  return {
    ...state,
    leaderboard,
  };
};

export default addMember;
