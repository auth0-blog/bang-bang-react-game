const loadLeaderboard = (state, action) => {
  const { members } = action.leaderboard;
  const membersIds = Object.keys(members);

  const leaderboard = [];

  membersIds.forEach((memberId) => {
    leaderboard.push({
      id: memberId,
      ...members[memberId],
    });
  });

  leaderboard.sort((prev, next) => {
    if (prev.maxScore === next.maxScore) {
      return prev.name <= next.name ? -1 : 1;
    }
    return prev.maxScore < next.maxScore ? -1 : 1;
  });

  const me = {
    id: action.leaderboard.me.id,
    ...action.leaderboard.me.info,
  };
  return {
    ...state,
    leaderboard,
    me,
  };
};

export default loadLeaderboard;
