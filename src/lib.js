const { countLines, countWords, countCharacters } = require('../src/utils/string.js');
const { justifyWordCount } = require('../src/formatter.js');

const wc = function(fileName, fs) {
  const fileContent = readFile(fileName, fs);
  const lineCount = countLines(fileContent);
  const wordCount = countWords(fileContent);
  const characterCount = countCharacters(fileContent);
  return justifyWordCount(lineCount) + justifyWordCount(wordCount) + justifyWordCount(characterCount) + ' ' + fileName
};

const readFile = function(fileName, fs) {
  return fs.readFileSync(fileName, 'utf-8');
};

module.exports = { wc }