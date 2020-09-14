const mathHelpers = require('./mathHelpers')

describe('degToRad()', () => {
  it('should convert degrees to radians', () => {
    expect(mathHelpers.degToRad(-10.27699)).toBe(-0.17936731269453204);
  })
})

describe('isDistanceInsideRadius()', () => {
  it('should return true if the great-circle distance between two points <= distance', () => {
    const close = {
      latOne: 53.74452,
      latTwo: 53.761389,
      longOne: -7.11167,
      longTwo: -7.2875
    }
    expect(mathHelpers.isDistanceInsideRadius(close.latOne, close.longOne, close.latTwo, close.longTwo, 100)).toBe(true);
  })
  it('should return false otherwise', () => {
    const far = {
      latOne: 52.833502,
      latTwo: 54.080556,
      longOne: -8.522366,
      longTwo: -6.361944
    }
    expect(mathHelpers.isDistanceInsideRadius(far.latOne, far.longOne, far.latTwo, far.longTwo, 80)).toBe(false);
  })
})