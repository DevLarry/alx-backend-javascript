const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('calculate Number', () => {
    it('real numbers', () => {
      assert.equal(calculateNumber(1, 3), 4);
    });
    it('zeros', () => {
      assert.equal(calculateNumber(0, 0), 0);assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('fractions', () => {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });
});
