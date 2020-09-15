const formatData = require('./formatData');

const customerArray = [ 
  { latitude: '52.986375', user_id: 12, name: 'Christina McArdle', longitude: '-6.043701' },
  { latitude: '54.0894797', user_id: 8, name: 'Eoin Ahearn', longitude: '-6.18671' },
  { latitude: '53.038056', user_id: 26, name: 'Stephen McArdle', longitude: '-7.653889' },
  { latitude: '53.1229599', user_id: 6, name: 'Theresa Enright', longitude: '-6.2705202' }
]

const formatted = [
  {id: 12, name: 'Christina McArdle'},
  {id: 8, name: 'Eoin Ahearn'},
  {id: 26, name: 'Stephen McArdle'},
  {id: 6, name: 'Theresa Enright'}
]

describe('formatData()', () => {
  it('should return an array of objects of only user_id\'s and names', () => {
    expect(formatData(customerArray)).toStrictEqual(formatted);
  });
});