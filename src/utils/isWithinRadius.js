const { getDistance } = require('./mathHelpers');

/**
 *
 * @param {object} office
 * @param {number} distance 
 * @returns {boolean}
 */
module.exports = (office, distance) => (customer) => {
  const distanceBetweenPoints = getDistance(
    customer.latitude,
    customer.longitude,
    office.latitude,
    office.longitude
  )
  return distanceBetweenPoints <= distance;
}
