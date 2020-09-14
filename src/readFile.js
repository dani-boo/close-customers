const fs = require('fs');

module.exports = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split("\n").map(line => JSON.parse(line));
  }
  catch(err) {
    return [];
  }
}
