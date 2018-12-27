const {
  countLines,
  countWords,
  countCharacters,
} = require('../src/utils/string.js');

const { parseInput } = require('../src/inputParser.js');
const { singleFileFormatter, multipleFileFormatter } = require('../src/formatter.js');
const { isSingleFile, getFileDetails } = require('../src/fileLib.js');

const wc = function(userArgs, fs) {
  let { fileNames, options } = parseInput(userArgs);
  let fileDetails = fileNames.map(fileName => getFileDetails(fileName, fs));

  let fileCountDetails = fileDetails.map(fileDetail =>
    getFileCountDetail(fileDetail, options)
  );

  if (!isSingleFile(fileNames)) {
    return multipleFileFormatter(fileCountDetails);
  }
  let firstFileCountDetail = fileCountDetails[0];
  return singleFileFormatter(firstFileCountDetail);
};

const getFileCountDetail = function(fileDetail, options) {
  let fileCountDetail = { count: [], fileName: fileDetail.name };
  options.forEach(option => {
    let operation = selectCount(option);
    let count = operation(fileDetail.content);
    fileCountDetail.count.push(count);
  });
  return fileCountDetail;
};

const selectCount = function (option) {
  let options = {
    line: countLines,
    word: countWords,
    character: countCharacters
  }
  return options[option];
}

module.exports = { wc }