const isWithinRadius = require('./isWithinRadius')
const mathHelpers = require('./mathHelpers')

jest.mock('./mathHelpers', () => ({
  getDistance: jest.fn(),
}));

describe('isWithinRadius()', () => {
  const officeData = {
    INTERCOM_LAT: 53.339428,
    INTERCOM_LONG: -6.257664,
    DISTANCE: 100,
  }

  const customerData = 
    { latitude: '54.0894797', user_id: 8, name: 'Eoin Ahearn', longitude: '-12.18671' };

  it('should return false if the distance from the office is greater than the specified distance', () => {
    mathHelpers.getDistance.mockReturnValue(21);
    expect(isWithinRadius(officeData, 20)(customerData)).toBe(false)
  })

  it('should return true if the distance from the office is less than or equal to the specified distance', () => {
    mathHelpers.getDistance.mockReturnValue(19);
    expect(isWithinRadius(officeData, 20)(customerData)).toBe(true)
  })

  it('can be used to filter an array', () => {
    mathHelpers.getDistance.mockReturnValueOnce(19);
    expect([customerData].filter(isWithinRadius(officeData, 20))).toStrictEqual([customerData])
    
    mathHelpers.getDistance.mockReturnValueOnce(21);
    expect([customerData].filter(isWithinRadius(officeData, 20))).toStrictEqual([])
  })
})