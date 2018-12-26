const assert = require('assert');
const { wc } = require('../src/lib.js');

const files = {
  file1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join(' ')
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
  it('should return number of lines, words & characters in a file', () => {
    let expectedOutput = '       0      10      20 file1';
    assert.deepEqual(wc('file1', fs), expectedOutput);
  });
});