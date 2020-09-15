const { getDistance } = require('./mathHelpers');

module.exports = (office, distance) => (customer) => {
  const distanceBetweenPoints = getDistance(
    customer.latitude,
    customer.longitude,
    office.latitude,
    office.longitude
  );
  return distanceBetweenPoints <= distance;
}
