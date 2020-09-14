const mathHelpers = require('./mathHelpers')

describe('degToRad()', () => {
  it('should convert degrees to radians', () => {
    expect(mathHelpers.degToRad(-10.27699)).toBe(-0.17936731269453204);
  })
})

describe('getDistance()', () => {
  it('should return true if the great-circle distance between two points <= distance', () => {
    const close = {
      latOne: 53.74452,
      latTwo: 53.761389,
      longOne: -7.11167,
      longTwo: -7.2875
    }
    expect(mathHelpers.getDistance(close.latOne, close.longOne, close.latTwo, close.longTwo)).toStrictEqual(11.711308403357469);
  })
  it('should return false otherwise', () => {
    const far = {
      latOne: 52.833502,
      latTwo: 54.080556,
      longOne: -8.522366,
      longTwo: -6.361944
    }
    expect(mathHelpers.getDistance(far.latOne, far.longOne, far.latTwo, far.longTwo)).toStrictEqual(199.20172129454426);
  })
})