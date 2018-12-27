const { singleFileFormatter, multipleFileFormatter } = require('../src/formatter.js');
const assert = require('assert');

describe('singleFileFormatter', () => {
  it('should return justified file count when single file & one option is given', () => {
    let actualInput = { count: [10], fileName: 'number.txt' };
    let expectedOutput = '      10 number.txt';
    assert.equal(singleFileFormatter(actualInput), expectedOutput);
  });

  it('should return justified file count when single file & two option is given', () => {
    let actualInput = { count: [10, 20], fileName: 'number.txt' };
    let expectedOutput = '      10      20 number.txt';
    assert.equal(singleFileFormatter(actualInput), expectedOutput);
  });
  it('should return justified file count when single file & three option is given', () => {
    let actualInput = { count: [10, 20, 30], fileName: 'number.txt' };
    let expectedOutput = '      10      20      30 number.txt';
    assert.equal(singleFileFormatter(actualInput), expectedOutput);
  });
});

describe('multipleFileFormatter', () => {
  it('should return justified file count when single file & one option is given', () => {
    let actualInput = [{ count: [10], fileName: 'number.txt' },
    { count: [10], fileName: 'character.txt' }];
    let expectedOutput = '      10 number.txt\n' +
      '      10 character.txt\n' +
      '      20 total';
    assert.equal(multipleFileFormatter(actualInput), expectedOutput);
  });

  it('should return justified file count when single file & two option is given', () => {
    let actualInput = [{ count: [10, 20], fileName: 'number.txt' },
    { count: [10, 20], fileName: 'number.txt' }];
    let expectedOutput = '      10      20 number.txt\n' +
      '      10      20 number.txt\n' +
      '      20      40 total';
    assert.equal(multipleFileFormatter(actualInput), expectedOutput);
  });
  it('should return justified file count when single file & three option is given', () => {
    let actualInput = [{ count: [10, 20, 30], fileName: 'number.txt' },
    { count: [10, 20, 30], fileName: 'number.txt' }];
    let expectedOutput = '      10      20      30 number.txt\n' +
      '      10      20      30 number.txt\n' +
      '      20      40      60 total';
    assert.equal(multipleFileFormatter(actualInput), expectedOutput);
  });
});