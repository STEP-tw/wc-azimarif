const NEWLINE = '\n';
const SPACE = ' ';
const EMPTY_STRING = '';

const wc = function(fileName, fs) {
  const fileContent = readFile(fileName, fs);
  const lineCount = countLines(fileContent);
  const wordCount = countWords(fileContent);
  const characterCount = countCharacter(fileContent);
  return (
    '       ' + lineCount + '      ' + wordCount + '      ' + characterCount + ' ' + fileName
  );
};

const countLines = function(content) {
  return content.split(NEWLINE).length - 1;
};

const countWords = function(content) {
  return content.split(SPACE).length;
};

const countCharacter = function(content) {
  return content.split(EMPTY_STRING).length;
};

const readFile = function(fileName, fs) {
  return fs.readFileSync(fileName, 'utf-8');
};

module.exports = { wc }