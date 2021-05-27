const MOVE_RIGHT = 'R';
const isntAnArray = (building) => !Array.isArray(building);
const isEmpty = (building) => building.length === 0;
const myCarIsntThere = (building) => building.indexOf(2) === -1;
const isInvalidParking = (building) =>
  isntAnArray(building) || isEmpty(building) || myCarIsntThere(building);
const inWhichParkingSlotIsMyCar = (building) => building.indexOf(2) + 1;

const moveToTheExit = (building) => {
  const direction = MOVE_RIGHT;
  const parkingSize = building.length;
  const steps = parkingSize - inWhichParkingSlotIsMyCar(building);
  return direction.concat(steps);
};

function carParkEscape(building) {
  if (isInvalidParking(building)) return 'ERROR';

  return moveToTheExit(building);
}

module.exports = { carParkEscape, inWhichParkingSlotIsMyCar };
