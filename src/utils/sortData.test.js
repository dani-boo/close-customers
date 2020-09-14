const sortData = require('./sortData');

const customerArr =  [
  { user_id: 3, name: 'Richard Finnegan' },
  { user_id: 4, name: 'Nora Dempsey' },
  { user_id: 1, name: 'Christina McArdle' },
  { user_id: 2, name: 'Ian Kehoe' }
]

const doubledValues = [
  { user_id: 5, name: 'some person' },
  { user_id: 5, name: 'another person' }
]

describe('sortData()', () => {
  it('should sort an array by user_id', () => {
    const sorted = sortData(customerArr)
    expect(sorted[0].user_id).toBe(1)
    expect(sorted[3].user_id).toBe(4)
  })
  it('should not sort if the user_id\'s are the same', () => {
    const doNotSort = sortData(doubledValues)
    expect(doNotSort).toBe(doubledValues)
  })
})