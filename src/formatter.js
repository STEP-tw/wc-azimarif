const { SPACE, NEWLINE, EMPTY_STRING } = require('../src/utils/string.js');

const repeat = function(character, count) {
  return new Array(count).fill(character).join('');
};

const justifyCount = function(count) {
  let countLength = count.toString().length;
  let numberOfSpace = 8 - countLength;
  return repeat(SPACE, numberOfSpace) + count;
};

const singleFileFormatter = function(lines) {
  return lines.join(NEWLINE);
};

const multipleFileFormatter = function(lines) {
  let totalLineCount = (totalWordCount = totalCharacterCount = 0);
  lines.forEach(line => {
    let lineDetail = line.split(SPACE).filter(word => word != EMPTY_STRING);
    totalLineCount += +lineDetail[0];
    totalWordCount += +lineDetail[1];
    totalCharacterCount += +lineDetail[2];
  });
  return (
    singleFileFormatter(lines) +
    NEWLINE +
    justifyCount(totalLineCount) +
    justifyCount(totalWordCount) +
    justifyCount(totalCharacterCount) +
    ' total'
  );
};

module.exports = { justifyCount, singleFileFormatter, multipleFileFormatter };
