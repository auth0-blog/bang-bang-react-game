const degreesToRadian = degrees => ((degrees * Math.PI) / 180);

const radiansToDegrees = radians => ((radians * 180) / Math.PI);

const magnitude = (x, y) => {
  const xSquared = x * x;
  const ySquared = y * y;
  return Math.sqrt(xSquared + ySquared);
};

const calculateAngle = (x1, y1, x2, y2) => {
  const dividend = (x1 * x2) + (y1 * y2);
  const magnitude1 = magnitude(x1, x2);
  const magnitude2 = magnitude(y1, y2);
  const divisor = magnitude1 * magnitude2;
  return radiansToDegrees(Math.acos(dividend / divisor));
};

export {
  calculateAngle,
  degreesToRadian,
  radiansToDegrees,
};
