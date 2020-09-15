const fs = require('fs');
const console = require('./utils/console');

const greenText = '\x1b[32m%s\x1b[0m';
const successMessage = `✨SUCCESS!✨ See results in public/output.txt ✨
✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ \n`;
const redText = '\x1b[31m%s\x1b[0m';
const errorMessage = 'ERROR: could not write file';

module.exports = (writeFilePath, stringData) => {
  try {
    if (stringData) console.log(greenText, successMessage, stringData);
    return fs.writeFileSync(writeFilePath, stringData);
  }
  catch(err) {
    console.warn(redText, errorMessage);
    throw(err);
  }
}
