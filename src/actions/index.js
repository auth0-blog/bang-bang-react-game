export const AUTHENTICATION_EVENT = 'AUTHENTICATION_EVENT';
export const SHOOT = 'SHOOT';
export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const CREATE_AND_MOVE = 'CREATE_AND_MOVE';
export const START_GAME = 'START_GAME';
export const ADD_MEMBER = 'ADD_MEMBER';
export const LOAD_LEADERBOARD = 'LOAD_LEADERBOARD';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';

export const authenticationEvent = me => ({
  type: AUTHENTICATION_EVENT,
  me,
});

export const shoot = mousePosition => ({
  type: SHOOT,
  mousePosition,
});

export const createAndMove = mousePosition => ({
  type: CREATE_AND_MOVE,
  mousePosition,
});

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const startGame = () => ({
  type: START_GAME,
});

export const loadLeaderboard = leaderboard => ({
  type: LOAD_LEADERBOARD,
  leaderboard,
});

export const addMember = member => ({
  type: ADD_MEMBER,
  member,
});

export const removeMember = member => ({
  type: REMOVE_MEMBER,
  member,
});
