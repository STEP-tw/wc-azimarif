const repeat = function (character, count) {
  return new Array(count).fill(character).join('');
}

const justifyWordCount = function (count) {
  let countLength = count.toString().length;
  let numberOfSpace = 8 - countLength;
  return repeat(' ', numberOfSpace) + count;
}

module.exports = { justifyWordCount }