const isntAnArray = (building) => !Array.isArray(building);
const isEmpty = (building) => building.length === 0;
const myCarIsntThere = (building) => building.indexOf(2) === -1;
const isInvalidParking = (building) =>
  isntAnArray(building) || isEmpty(building) || myCarIsntThere(building);

const inWhciParkingSlotIsMyCar = (building) => building.indexOf(2) + 1;

function carParkEscape(building) {
  if (isInvalidParking(building)) return 'ERROR';

  return inWhciParkingSlotIsMyCar(building);
}

module.exports = carParkEscape;
