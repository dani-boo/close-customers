const main = require('./main');

const readFile = require('./readFile');
const writeFile = require('./writeFile');

const console = require('./utils/console');
const dataToString = require('./utils/dataToString');
const formatData = require('./utils/formatData');
const isWithinRadius = require('./utils/isWithinRadius');
const sortData = require('./utils/sortData');

jest.mock('./readFile', () => {
  return jest.fn(() => {
    return [
      {"latitude": "52.986375", "longitude": "-6.043701", "name": "Christina McArdle", "user_id": 12},
      {"latitude": "51.92893", "longitude": "-10.27699", "name": "Alice Cahill", "user_id": 1},
      {"latitude": "51.8856167", "longitude": "-10.4240951", "name": "Ian McArdle", "user_id": 2}
    ]
  });
})

jest.mock('./writeFile', () => {
  return jest.fn(() => {})
})

const OFFICE_DATA = {
  latitude: 53.339428,
  longitude: -6.257664
}
const DISTANCE = 100;

const stringData = `{"id": "12", "name": "Christina McArdle"}`;

const readFilePath = `{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"}
{"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699"}
{"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951"}`

const writeFilePath = './fakePath';

describe('main', () => {
  it('should call writeFile with correct arguments', () => {
    main(readFilePath, writeFilePath);
    expect(readFile).toHaveBeenCalledWith(readFilePath);
    expect(writeFile).toHaveBeenCalledWith(writeFilePath, stringData);
  })
  it('should throw an error if it fails', () => {
    writeFile.mockImplementation(() => {
      throw new Error();
    })
    expect(() => {
      main()
    }).toThrow();
  })
})