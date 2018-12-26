const { countLines, countWords, countCharacters } = require('../src/utils/string.js');
const { justifyCount } = require('../src/formatter.js');
const { parseInput } = require('../src/inputParser.js');

const wc = function (userArgs, fs) {
  let { fileNames, options } = parseInput(userArgs);
  let justifiedCount = '';
  const fileContent = readFile(fileNames[0], fs);
  options.forEach((option) => {
    let operation = selectOption(option);
    let count = operation(fileContent);
    justifiedCount = justifiedCount + justifyCount(count);
  });

  return justifiedCount + ' ' + fileNames[0];
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