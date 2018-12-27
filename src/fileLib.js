const FILE_READ_ENCODING = 'utf-8';

const readFile = function (file, fs) {
  if (isFileExists(file, fs)) {
    return fs.readFileSync(file, FILE_READ_ENCODING);
  }
};

const isFileExists = function (file, fs) {
  return fs.existsSync(file);
};

const isSingleFile = function (files) {
  return files.length == 1;
};

module.exports = { readFile, isSingleFile };