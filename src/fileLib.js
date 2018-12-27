const FILE_READ_ENCODING = 'utf-8';

const readFile = function (file, fs) {
  return fs.readFileSync(file, FILE_READ_ENCODING);
};

const isSingleFile = function (files) {
  return files.length == 1;
};

const getFileDetails = function (file, fs) {
  let fileDetail = {
    content: readFile(file, fs),
    name: file
  }
  return fileDetail;
}; 

module.exports = { isSingleFile, getFileDetails };