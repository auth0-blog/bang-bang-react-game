export const SHOOT = 'SHOOT';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const MOVE_BALL = 'MOVE_BALL';
export const MOVE_DISC = 'MOVE_DISC';
export const DESTROY_DISC = 'DESTROY_DISC';
export const ADD_FLYING_DISC = 'ADD_FLYING_DISC';
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

export const addFlyingDisc = () => ({
  type: ADD_FLYING_DISC,
});

export const moveDisc = (position, id) => ({
  type: MOVE_DISC,
  position,
  id,
});

export const destroyDiscs = objectsDestroyed => ({
  type: DESTROY_DISC,
  objectsDestroyed,
});

export const startGame = () => ({
  type: START_GAME,
});
