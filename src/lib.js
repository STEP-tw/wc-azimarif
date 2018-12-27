const {
  countLines,
  countWords,
  countCharacters,
} = require('../src/utils/string.js');

const { parseInput } = require('../src/inputParser.js');
const { singleFileFormatter, multipleFileFormatter } = require('../src/formatter.js');
const { readFile, isSingleFile } = require('../src/fileLib.js');

const wc = function (userArgs, fs) {
  let { fileNames, options } = parseInput(userArgs);
  let justifiedCount = [];
  fileNames.forEach(fileName => {
    let fileCountDetail = getFileCountDetail(fileName, options, fs);
    justifiedCount.push(fileCountDetail);
  });
  if (!isSingleFile(fileNames)) {
    return multipleFileFormatter(justifiedCount);
  }
  let fileDetail = justifiedCount[0];
  return singleFileFormatter(fileDetail);
};

const getFileCountDetail = function (fileName, options, fs) {
  const fileContent = readFile(fileName, fs);
  let fileDetail = { count: [], fileName };
  options.forEach(option => {
    let operation = selectOption(option);
    let count = operation(fileContent);
    fileDetail.count.push(count);
  });
  return fileDetail;
};

const selectOption = function (option) {
  let options = {
    line: countLines,
    word: countWords,
    character: countCharacters
  }
  return options[option];
}

module.exports = { wc }