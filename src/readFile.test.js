const fs = require('fs');
const readFile = require('./readFile');

jest.mock('fs');

const testData = `{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"}
{"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699"}
{"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951"}`

const dataAsJSON = [
  {"latitude": "52.986375", "longitude": "-6.043701", "name": "Christina McArdle", "user_id": 12},
  {"latitude": "51.92893", "longitude": "-10.27699", "name": "Alice Cahill", "user_id": 1},
  {"latitude": "51.8856167", "longitude": "-10.4240951", "name": "Ian McArdle", "user_id": 2}
]

describe('readCustomerData', () => {
  it('should call fs.readFileSync with the correct arguments', () => {
    fs.readFileSync.mockReturnValue(testData);
    readFile('fakeFilePath');
    expect(fs.readFileSync).toHaveBeenCalledWith('fakeFilePath', 'utf8'); 
  })
  it('should return data as a JSON array', () => {
    const parsedData = readFile(testData)
    expect(parsedData).toStrictEqual(dataAsJSON)
  })

  it('should return an empty array if path or data do not exist', () => {
    fs.readFileSync.mockReturnValue('')
    expect(readFile('non-existent-path')).toStrictEqual([])
  })

  it('should return an empty array if called with incorrect data types', () => {
    const dataIsNotAString = {badData: 'bad data'}
    fs.readFileSync.mockReturnValue({badData: 'bad data'})
    expect(readFile(dataIsNotAString)).toStrictEqual([])
  })
})
