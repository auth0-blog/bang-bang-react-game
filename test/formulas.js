import assert from 'assert';

import { calculateAngle } from '../src/Utils/formulas';

describe('Formulas', () => {
  it('should calculate angles properly', () => {
    const angle = calculateAngle(4, 3, 3, 5);
    assert.equal(angle, 22.166345822082455);

    const angle45 = calculateAngle(4, 4, 4, 0);
    assert.equal(Math.round(angle45 * 100000) / 100000, 45);

    const angle90 = calculateAngle(0, 4, 4, 0);
    assert.equal(Math.round(angle90 * 100000) / 100000, 90);
  });
});
