import { sortLeaderboard } from '../utils/formulas';

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

  sortLeaderboard(leaderboard);

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
