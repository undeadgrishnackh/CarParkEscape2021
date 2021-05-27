function isInvalidParking(building) {
  return !Array.isArray(building) || building.length === 0 || building.indexOf(2) === -1;
}

function carParkEscape(building) {
  if (isInvalidParking(building)) return 'ERROR';
  return undefined;
}

module.exports = carParkEscape;
