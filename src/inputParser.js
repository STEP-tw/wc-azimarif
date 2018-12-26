const { EMPTY_STRING, HYPHEN } = require('../src/utils/string.js');
const {singleFileFormatter, multipleFileFormatter} = require('../src/formatter.js');

const parseInput = function (userArgs) {
  let firstArg = userArgs[0];
  let fileNames = userArgs.slice(1);

  if (hasOption(firstArg)) {
    let options = firstArg.slice(1).split(EMPTY_STRING);
    return createParameterObject(mapOptions(options), fileNames, getFormatter(fileNames));
  }
  return createParameterObject(['line', 'word', 'character'], userArgs, getFormatter(userArgs));
};

const getFormatter = function (files) {
  let formatter = singleFileFormatter;
  if (files.length > 1) {
    formatter = multipleFileFormatter;
  }
  return formatter;
}

const mapOptions = function (userOptions) {
  let options = {
    line: 'l',
    word: 'w',
    character: 'c'
  };
  return getKeys(options).filter((option)=> userOptions.includes(options[option]));
};

const getKeys = function (object) {
  return Object.keys(object);
}

const createParameterObject = function (options, fileNames, formatter) {
  return { options, fileNames, formatter };
};

const hasOption = function (option) {
  return option.startsWith(HYPHEN);
};

module.exports = {
  parseInput
};