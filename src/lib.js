const {
  countLines,
  countWords,
  countCharacters,
  SPACE
} = require('../src/utils/string.js');

const { justifyCount } = require('../src/formatter.js');
const { parseInput } = require('../src/inputParser.js');
const {singleFileFormatter, multipleFileFormatter} = require('../src/formatter.js');


const wc = function(userArgs, fs) {
  let { fileNames, options } = parseInput(userArgs);
  let justifiedCount = [];
  fileNames.forEach(fileName => {
    let fileCountDetail = getFileCountDetail(fileName, options, fs);
    justifiedCount.push(fileCountDetail);
  });
  if(fileNames.length > 1){
    return multipleFileFormatter(justifiedCount);
  }
  fileDetail = justifiedCount[0];
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

const readFile = function (fileName, fs) {
  return fs.readFileSync(fileName, 'utf-8');
};

module.exports = { wc }