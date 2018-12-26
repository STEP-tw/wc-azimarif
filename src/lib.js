const {
  countLines,
  countWords,
  countCharacters,
  SPACE
} = require('../src/utils/string.js');

const { justifyCount } = require('../src/formatter.js');
const { parseInput } = require('../src/inputParser.js');

const wc = function(userArgs, fs) {
  let { fileNames, options, formatter } = parseInput(userArgs);
  let justifiedCount = [];
  fileNames.forEach(fileName => {
    let fileCountDetail = getFileCountDetail(fileName, options, fs);
    justifiedCount.push(fileCountDetail);
  });
  return formatter(justifiedCount);
};

const getFileCountDetail = function(fileName, options, fs) {
  const fileContent = readFile(fileName, fs);
  let fileCountDetail = '';
  options.forEach(option => {
    let operation = selectOption(option);
    let count = operation(fileContent);
    fileCountDetail = fileCountDetail + justifyCount(count);
  });
  return fileCountDetail + SPACE + fileName;
};

const selectOption = function (option) {
  let options = {
    line: countLines,
    word: countWords,
    character: countCharacters
  }
  return options[option];
}

const readFile = function (fileName, fs) {
  return fs.readFileSync(fileName, 'utf-8');
};

module.exports = { wc }