const { SPACE, NEWLINE, EMPTY_STRING } = require('../src/utils/string.js');
const { addTwoList, isNumber } = require('../src/utils/number.js');

const repeat = function(character, count) {
  return new Array(count).fill(character).join('');
};

const justifyCount = function(count) {
  let countLength = count.toString().length;
  let numberOfSpace = 8 - countLength;
  return repeat(SPACE, numberOfSpace) + count;
};

const singleFileFormatter = function(fileDetail) {
  let formattedOutput = fileDetail.count.map(count => justifyCount(count));
  return formattedOutput.join(EMPTY_STRING) + SPACE + fileDetail.fileName;
};

const multipleFileFormatter = function(fileDetails) {
  let formattedOutput = [];
  let totalCount = [0, 0, 0];

  fileDetails.forEach(fileDetail => {
    formattedOutput.push(singleFileFormatter(fileDetail));
    totalCount = addTwoList(totalCount, fileDetail.count);
  });

  let filteredCounts = totalCount.filter(count => isNumber(count));
  let allFilesCount = { count: filteredCounts, fileName: 'total' };

  formattedOutput.push(singleFileFormatter(allFilesCount));
  return formattedOutput.join(NEWLINE);
};

module.exports = { justifyCount, singleFileFormatter, multipleFileFormatter };
