const { justifyCount } = require('../src/formatter.js');
const assert = require('assert');

describe('justifyCount', () => {
  it('should return the justified count with a width of 8 characters', () => {
    assert.equal(justifyCount(0), '       0');
    assert.equal(justifyCount(10), '      10');
    assert.equal(justifyCount(100), '     100');
  });
});