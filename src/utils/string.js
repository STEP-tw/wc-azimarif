const { sum } = require('../utils/number.js');
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

const countWords = function (content) {
  let lines = content.split(NEWLINE);
  let numberOfWordsInLine = lines.map((line) =>
    line.split(SPACE).filter(word => isWord(word)).length);
  let wordCount = numberOfWordsInLine.reduce(sum, 0);
  return wordCount;
};

const countCharacters = function (content) {
  return content.length;
};

const repeatCharacter = function (character, count) {
  return new Array(count).fill(character).join(EMPTY_STRING);
};

const rightJustifier = function (width, text) {
  let textLength = text.toString().length;
  let numberOfSpaces = width - textLength;
  return repeatCharacter(SPACE, numberOfSpaces) + text;
}

module.exports = {
  countLines,
  countWords,
  countCharacters,
  SPACE,
  HYPHEN,
  EMPTY_STRING,
  NEWLINE,
  rightJustifier
}