const degreesToRadian = degrees => ((degrees * Math.PI) / 180);

const radiansToDegrees = radians => ((radians * 180) / Math.PI);

const magnitude = (x, y) => {
  const xSquared = x * x;
  const ySquared = y * y;
  return Math.sqrt(xSquared + ySquared);
};

const dotProduct = (x1, y1, x2, y2) => {
  if (x1 === 0 && y1 === 0) {
    return NaN;
  }
  if (x2 === 0 && y2 === 0) {
    return NaN;
  }
  return (x1 * x2) + (y1 * y2);
};

const calculateAngle = (x1, y1, x2, y2) => {
  const dividend = dotProduct(x1, y1, x2, y2);
  const magnitude1 = magnitude(x1, y1);
  const magnitude2 = magnitude(y2, x2);
  const divisor = magnitude1 * magnitude2;
  return radiansToDegrees(dividend / divisor);
};

export {
  magnitude,
  calculateAngle,
  degreesToRadian,
  radiansToDegrees,
  dotProduct,
};
