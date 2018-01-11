export const SHOOT = 'SHOOT';
export const MOVE_MOUSE = 'MOVE_MOUSE';

export const shoot = position => ({
  type: SHOOT,
  position,
});

export const moveMouse = position => ({
  type: MOVE_MOUSE,
  position,
});
