const sortData = require('./sortData');

const customerArr =  [
  { id: 3, name: 'Richard Finnegan' },
  { id: 4, name: 'Nora Dempsey' },
  { id: 1, name: 'Christina McArdle' },
  { id: 2, name: 'Ian Kehoe' }
]

const doubledValues = [
  { id: 5, name: 'some person' },
  { id: 5, name: 'another person' }
]

describe('sortData()', () => {
  it('should sort an array by id', () => {
    const sorted = sortData(customerArr)
    expect(sorted[0].id).toBe(1)
    expect(sorted[3].id).toBe(4)
  })
  it('should not sort if the id\'s are the same', () => {
    const doNotSort = sortData(doubledValues)
    expect(doNotSort).toBe(doubledValues)
  })
})