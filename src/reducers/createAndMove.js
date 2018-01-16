import Position from '../utils/Position';
import moveObjects from './moveObjects';

const predefinedPositions = [
  -300,
  -150,
  150,
  300,
];

function createAndMove(state, action) {
  const { flyingDiscs } = state;
  if (flyingDiscs.length === 4) return moveObjects(state, action);
  const id = (new Date()).getTime();
  const predefinedPosition = Math.floor(Math.random() * 4);
  const discPosition = predefinedPositions[predefinedPosition];
  const newFlyingDisc = {
    position: new Position(discPosition, -600),
    calculatedPosition: new Position(discPosition, -600),
    angle: 180,
    id,
  };
  return moveObjects({
    ...state,
    lastDiscCreatedAt: new Date(),
    flyingDiscs: [...flyingDiscs, newFlyingDisc],
  }, action);
}

export default createAndMove;
