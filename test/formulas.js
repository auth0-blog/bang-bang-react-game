import assert from 'assert';

import { calculateAngle } from '../src/Utils/formulas';

describe('Formulas', () => {
  it('should calculate angles properly', () => {
    const angle = calculateAngle(4, 3, 3, 5);
    assert.equal(angle, 22.166345822082455);
  });
});
