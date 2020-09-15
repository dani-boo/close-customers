const EARTH_RADIUS = 6371;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const getDistance = (latOne, longOne, latTwo, longTwo) => {
  const longDiff = Math.abs(degToRad(longOne) - degToRad(longTwo));
  const diff =
    Math.sin(degToRad(latOne)) * Math.sin(degToRad(latTwo)) +
    Math.cos(degToRad(latOne)) * Math.cos(degToRad(latTwo)) * Math.cos(longDiff);
  return (Math.acos(diff) * EARTH_RADIUS);
};

exports.degToRad = degToRad;
exports.getDistance = getDistance;
