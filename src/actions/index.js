export const SHOOT = 'SHOOT';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const MOVE_BALL = 'MOVE_BALL';
export const MOVE_DISCS = 'MOVE_DISCS';
export const DESTROY_DISC = 'DESTROY_DISC';
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

export const moveBall = (position, id) => ({
  type: MOVE_BALL,
  position,
  id,
});

export const createAndMove = () => ({
  type: CREATE_AND_MOVE,
});

export const moveDiscs = () => ({
  type: MOVE_DISCS,
});

export const destroyDiscs = objectsDestroyed => ({
  type: DESTROY_DISC,
  objectsDestroyed,
});

export const startGame = () => ({
  type: START_GAME,
});
