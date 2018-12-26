const { SPACE } = require('../src/utils/string.js');

const repeat = function (character, count) {
  return new Array(count).fill(character).join('');
}

const justifyCount = function (count) {
  let countLength = count.toString().length;
  let numberOfSpace = 8 - countLength;
  return repeat(SPACE, numberOfSpace) + count;
}

module.exports = { justifyCount }