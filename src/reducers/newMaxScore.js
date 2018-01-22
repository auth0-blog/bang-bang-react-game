import { sortLeaderboard } from '../utils/formulas';

const newMaxScore = (state, action) => {
  const currentLeaderboard = state.leaderboard;

  const leaderboard = currentLeaderboard.map((member) => {
    if (member.id !== action.maxScore.id) return member;
    return {
      ...member,
      maxScore: action.maxScore.maxScore,
    };
  });

  sortLeaderboard(leaderboard);

  return {
    ...state,
    leaderboard,
  };
};

export default newMaxScore;
