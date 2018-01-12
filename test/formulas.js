import assert from 'assert';

import { calculateAngle } from '../src/utils/formulas';

describe('Formulas', () => {
  it('should return 90 when aiming below', () => {
    let angle = calculateAngle(0, 0, 20, 20);
    assert.equal(angle, 90);

    angle = calculateAngle(0, 0, -20, -20);
    assert.equal(angle, -45);
  });
});
