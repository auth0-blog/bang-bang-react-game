import Position from '../utils/Position';
import moveObjects from './moveObjects';
import { flyingDiscsMovementAngle, flyingDiscsStarterAxisY, flyingDiscsStarterPositions } from '../utils/constants';

function createAndMove(state, action) {
  const { flyingDiscs } = state;
  const positionsCount = flyingDiscsStarterPositions.length;

  if (flyingDiscs.length === positionsCount) return moveObjects(state, action);

  const id = (new Date()).getTime();
  const predefinedPosition = Math.floor(Math.random() * positionsCount);
  const discPosition = flyingDiscsStarterPositions[predefinedPosition];
  const newFlyingDisc = {
    position: new Position(discPosition, flyingDiscsStarterAxisY),
    createdAt: (new Date()).getTime(),
    angle: flyingDiscsMovementAngle,
    id,
  };
  return moveObjects({
    ...state,
    lastDiscCreatedAt: new Date(),
    flyingDiscs: [...flyingDiscs, newFlyingDisc],
  }, action);
}

export default createAndMove;
