const assert = require('assert');
const { wc } = require('../src/lib.js');

const files = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join(' '),
  characters: ['a', 'b', 'c', 'd', 'e'].join(),
  multiLineFile: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join('\n')
}

const fs = {
  readFileSync: function (fileName) {
    return files[fileName];
  },
  existsSync: function (fileName) {
    return files.hasOwnProperty(fileName);
  }
}

describe('wc', () => {
  it('should return number of lines, words & characters in a file with file name', () => {
    let expectedOutput = '       0      10      20 numbers';
    assert.deepEqual(wc(['numbers'], fs), expectedOutput);

    expectedOutput = '       0       1       9 characters';
    assert.deepEqual(wc(['characters'], fs), expectedOutput);

    expectedOutput = '       9      10      20 multiLineFile';
    assert.deepEqual(wc(['multiLineFile'], fs), expectedOutput);
  });

  it('should return number of lines in a file with file name', () => {
    let expectedOutput = '       0 numbers';
    assert.deepEqual(wc(['-l', 'numbers'], fs), expectedOutput);

    expectedOutput = '       0 characters';
    assert.deepEqual(wc(['-l', 'characters'], fs), expectedOutput);

    expectedOutput = '       9 multiLineFile';
    assert.deepEqual(wc(['-l', 'multiLineFile'], fs), expectedOutput);
  });

  it('should return number of lines in a file with file name', () => {
    let expectedOutput = '      10 numbers';
    assert.deepEqual(wc(['-w', 'numbers'], fs), expectedOutput);

    expectedOutput = '       1 characters';
    assert.deepEqual(wc(['-w', 'characters'], fs), expectedOutput);

    expectedOutput = '      10 multiLineFile';
    assert.deepEqual(wc(['-w', 'multiLineFile'], fs), expectedOutput);
  });

  it('should return number of characters in a file with file name', () => {
    let expectedOutput = '      20 numbers';
    assert.deepEqual(wc(['-c', 'numbers'], fs), expectedOutput);

    expectedOutput = '       9 characters';
    assert.deepEqual(wc(['-c', 'characters'], fs), expectedOutput);

    expectedOutput = '      20 multiLineFile';
    assert.deepEqual(wc(['-c', 'multiLineFile'], fs), expectedOutput);
  });
});