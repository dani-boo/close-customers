const EARTH_RADIUS = 6371;

/**
 * Convert degrees to radian
 * @param {number} degrees
 * @returns {number} radian
 */
const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Calculate great-circle distance between 2 points
 * @param {number} latOne first location's latitude
 * @param {number} longOne first location's longitude
 * @param {number} latTwo second location's latitude
 * @param {number} longTwo second location's longitude
 * @param {number} distance
 * @returns {boolean} true if <= distance
 */
const isDistanceInsideRadius = (latOne, longOne, latTwo, longTwo, distance) => {
  const lonDiff = Math.abs(degToRad(longOne) - degToRad(longTwo));
  const diff =
    Math.sin(degToRad(latOne)) * Math.sin(degToRad(latTwo)) +
    Math.cos(degToRad(latOne)) * Math.cos(degToRad(latTwo)) * Math.cos(lonDiff);
  return (Math.acos(diff) * EARTH_RADIUS) <= distance;
};

exports.degToRad = degToRad;
exports.isDistanceInsideRadius = isDistanceInsideRadius;