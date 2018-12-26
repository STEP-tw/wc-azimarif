const NEWLINE = '\n';
const SPACE = ' ';
const EMPTY_STRING = '';
const HYPHEN = '-';

const countLines = function (content) {
  return content.split(NEWLINE).length - 1;
};

const isWord = function (word) {
  return word != EMPTY_STRING;
}

const sum = function(num1, num2) {
  return num1 + num2;
}

const countWords = function (content) {
  let lines = content.split(NEWLINE);
  let numberOfWordsInLine = lines.map((line) => line.split(SPACE).filter(word => isWord(word)).length);
  let wordCount = numberOfWordsInLine.reduce(sum, 0);
  return wordCount;
};

const countCharacters = function (content) {
  return content.split(EMPTY_STRING).length;
};

module.exports = {
  countLines,
  countWords,
  countCharacters,
  SPACE,
  HYPHEN,
  EMPTY_STRING,
  NEWLINE
}