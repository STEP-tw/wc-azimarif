const { EMPTY_STRING, HYPHEN } = require('../src/utils/string.js');

const parseInput = function (userArgs) {
  let firstArg = userArgs[0];
  let fileNames = userArgs.slice(1);

  if (hasOption(firstArg)) {
    let options = firstArg.slice(1).split(EMPTY_STRING);
    return createParameterObject(mapOptions(options), fileNames);
  }
  return createParameterObject(['line', 'word', 'character'], userArgs);
};

const mapOptions = function (options) {
  let possibleOptions = {
    l: 'line',
    w: 'word',
    c: 'character'
  };
  return options.map(option => possibleOptions[option]);
};

const createParameterObject = function (options, fileNames) {
  return { options, fileNames };
};

const hasOption = function (option) {
  return option.startsWith(HYPHEN);
};

module.exports = {
  parseInput
};