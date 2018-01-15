export const SHOOT = 'SHOOT';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const CREATE_AND_MOVE = 'CREATE_AND_MOVE';
export const START_GAME = 'START_GAME';

export const shoot = angle => ({
  type: SHOOT,
  angle,
});

export const moveMouse = position => ({
  type: MOVE_MOUSE,
  position,
});

export const createAndMove = () => ({
  type: CREATE_AND_MOVE,
});

export const moveObjects = () => ({
  type: MOVE_OBJECTS,
});

export const startGame = () => ({
  type: START_GAME,
});
