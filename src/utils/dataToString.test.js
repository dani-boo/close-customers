const dataToString = require('./dataToString')

const inputData = [
  { id: 4, name: 'Ian Kehoe' },
  { id: 5, name: 'Nora Dempsey' },
  { id: 6, name: 'Theresa Enright' },
  { id: 8, name: 'Eoin Ahearn' }
];

const expected = `{"id": "4", "name": "Ian Kehoe"}
{"id": "5", "name": "Nora Dempsey"}
{"id": "6", "name": "Theresa Enright"}
{"id": "8", "name": "Eoin Ahearn"}`;

describe('dataToString()', () => {
  it('should map through an array and return a string in the correct format', () => {
    const formatted = dataToString(inputData);
    expect(formatted).toStrictEqual(expected);
  });
});