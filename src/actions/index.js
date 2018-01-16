export const SHOOT = 'SHOOT';
export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const CREATE_AND_MOVE = 'CREATE_AND_MOVE';
export const START_GAME = 'START_GAME';

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
