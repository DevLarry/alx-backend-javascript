const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('rounded', () => {
  it('Should return the sum o thwo numbers', () => {
    assert.equal(calculateNumber(12, 11), 23)
    assert.equal(calculateNumber(-1, 11), 10)
    assert.equal(calculateNumber(0, 0), 0)
    assert.equal(calculateNumber(-12, -11), -23)
  })
})
