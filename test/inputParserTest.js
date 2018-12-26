const { parseInput } = require('../src/inputParser.js');
const {
  singleFileFormatter,
  multipleFileFormatter
} = require('../src/formatter.js');
const assert = require('assert');

describe('parseInput', () => {
  it('should return line, word, character as option when only single filename is given', () => {
    let expectedOutput = {
      options: ['line', 'word', 'character'],
      fileNames: ['file1']
    };
    assert.deepEqual(parseInput(['file1']), expectedOutput);
  });

  it('should return line, word, character as option when only filenames is given', () => {
    let expectedOutput = {
      options: ['line', 'word', 'character'],
      fileNames: ['file1', 'file2']
    };
    assert.deepEqual(parseInput(['file1', 'file2']), expectedOutput);
  });

  it('should return line as option when option l & single filename is given', () => {
    let expectedOutput = {
      options: ['line'],
      fileNames: ['file1']
    };
    assert.deepEqual(parseInput(['-l', 'file1']), expectedOutput);
  });

  it('should return line as option when option l & multiple filenames is given', () => {
    let expectedOutput = {
      options: ['line'],
      fileNames: ['file1', 'file2']
    };
    assert.deepEqual(parseInput(['-l', 'file1', 'file2']), expectedOutput);
  });

  it('should return line as option when option c & single filename is given', () => {
    let expectedOutput = {
      options: ['character'],
      fileNames: ['file1']
    };
    assert.deepEqual(parseInput(['-c', 'file1']), expectedOutput);
  });

  it('should return line as option when option c & multiple filenames is given', () => {
    let expectedOutput = {
      options: ['character'],
      fileNames: ['file1', 'file2']
    };
    assert.deepEqual(parseInput(['-c', 'file1', 'file2']), expectedOutput);
  });

  it('should return line as option when option w & single filename is given', () => {
    let expectedOutput = {
      options: ['word'],
      fileNames: ['file1']
    };
    assert.deepEqual(parseInput(['-w', 'file1']), expectedOutput);
  });

  it('should return line as option when option w & multiple filenames is given', () => {
    let expectedOutput = {
      options: ['word'],
      fileNames: ['file1', 'file2']
    };
    assert.deepEqual(parseInput(['-w', 'file1', 'file2']), expectedOutput);
  });
});
