const readFile = require('./readFile');
const writeFile = require('./writeFile');

const console = require('./utils/console');
const dataToString = require('./utils/dataToString');
const formatData = require('./utils/formatData');
const isWithinRadius = require('./utils/isWithinRadius');
const sortData = require('./utils/sortData');

const OFFICE_DATA = {
  latitude: 53.339428,
  longitude: -6.257664
}
const DISTANCE = 100;

module.exports = (readFilePath, writeFilePath) => {
  try {
    const customersArray = readFile(readFilePath);
    const filteredCustomers = customersArray.filter(
      isWithinRadius(OFFICE_DATA, DISTANCE)
    );
    const sortedCustomers = sortData(filteredCustomers);
    const formattedCustomers = formatData(sortedCustomers);
    const stringData = dataToString(formattedCustomers);

    writeFile(writeFilePath, stringData);
  }
  catch(err) {
    throw err;
  }
}
