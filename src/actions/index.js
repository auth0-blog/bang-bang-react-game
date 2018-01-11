export const SHOOT = 'SHOOT';
export const MOVE_MOUSE = 'MOVE_MOUSE';
export const MOVE_BALL = 'MOVE_BALL';

export const shoot = position => ({
  type: SHOOT,
  position,
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
