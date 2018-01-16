// these are the positions, in the X axis, where discs can appear
export const flyingDiscsStarterPositions = [
  -300,
  -150,
  150,
  300,
];

// discs will appear at this altitude (minus means up)
export const flyingDiscsStarterAxisY = -700;

// discs will move down
export const flyingDiscsMovementAngle = 180;

// this is the position, in the Y axis, where hearts will appear
export const heartAxisY = 40;

// the rightmost heart will appear in this position in the X axis
export const heartInitialAxisX = -210;

// this is the width of a heart;
export const heartWidth = 70;

// new discs will appear every 1 second
export const intervalBetweenDiscCreation = 1000;

// the screen will refresh every 10 ms
export const intervelBetweenRefreshes = 10;

// there can be only 2 cannon balls simultaneously
export const maximumSimultaneousShots = 2; // 2 shots

// the id of the space key (you can also shoot with space)
export const spaceKeyId = 32;
