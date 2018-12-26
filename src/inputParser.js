const { EMPTY_STRING, HYPHEN } = require('../src/utils/string.js');

const parseInput = function (userArgs) {
  let options = userArgs.filter((userArg) => hasOption(userArg));
  let fileNames = userArgs.slice(options.length);
  options = options.map((option) => option.replace(HYPHEN, EMPTY_STRING));
  options = options.join(EMPTY_STRING).split(EMPTY_STRING);

  if (options.length < 1) {
    options = ['l', 'w', 'c'];
  }
  return createParameterObject(mapOptions(options), fileNames);
};

const mapOptions = function (userOptions) {
  let options = {
    line: 'l',
    word: 'w',
    character: 'c'
  };
  return getKeys(options).filter((option) => userOptions.includes(options[option]));
};

const getKeys = function (object) {
  return Object.keys(object);
}

const createParameterObject = function (options, fileNames) {
  return { options, fileNames };
};

const hasOption = function (option) {
  return option.startsWith(HYPHEN);
};

module.exports = {
  parseInput
};