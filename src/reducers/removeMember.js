const removeMember = (state, action) => {
  const members = [...state.members];
  members.push(action.member);
  return {
    ...state,
    members,
  };
};

export default removeMember;
