const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('Should return the sum o thwo numbers', () => {
    assert.equal(calculateNumber(1, 3), 4)
    assert.equal(calculateNumber(1, 3.7), 5)
    assert.equal(calculateNumber(0, 0), 0)
    assert.equal(calculateNumber(1.2, 3.7), 5)
  })
  it('Should return the sum of thwo numbers', () => {
    assert.equal(calculateNumber(1, 3), 4)
    assert.equal(calculateNumber(1, 3.7), 5)
    assert.equal(calculateNumber(0, 0), 0)
    assert.equal(calculateNumber(1.2, 3.7), 5)
  })
})
