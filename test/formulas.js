import assert from 'assert';

import { calculateAngle, dotProduct, magnitude } from '../src/Utils/formulas';

describe('Formulas', () => {
  it('should calculate angles properly', () => {
    // const angle = calculateAngle(4, 0, 4, 2);
    // assert.equal(Math.round(angle * 100000) / 100000, 45);
  });

  it('should calculate magnitude properly', () => {
    let result = magnitude(0, 1);
    assert.equal(result, 1);

    result = magnitude(1, 0);
    assert.equal(result, 1);

    result = magnitude(0, -1);
    assert.equal(result, 1);

    result = magnitude(-1, 0);
    assert.equal(result, 1);

    result = magnitude(3, 5);
    assert.equal(result, Math.sqrt(34));

    result = magnitude(1, 2);
    assert.equal(result, Math.sqrt(5));

    result = magnitude(-9, 20);
    assert.equal(result, Math.sqrt(481));
  });

  it('should calculate dot products properly', () => {
    let result = dotProduct(4, 0, 0, 2);
    assert.equal(result, 0);

    result = dotProduct(4, 1, 0, 2);
    assert.equal(result, 2);

    result = dotProduct(4, -1, 0, 2);
    assert.equal(result, -2);

    result = dotProduct(0, 0, 0, 0);
    assert.equal(Number.isNaN(result), true);

    result = dotProduct(0, 1, 0, 0);
    assert.equal(Number.isNaN(result), true);

    result = dotProduct(0, 0, 0, 2);
    assert.equal(Number.isNaN(result), true);
  });
});
