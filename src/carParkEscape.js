const MOVE_RIGHT = 'R';
const MY_CAR = '🚘';
const isntAnArray = (building) => !Array.isArray(building);
const isEmpty = (building) => building.length === 0;
const isMyCarParkedOnSomeFloor = (floor) => floor.some((parking) => parking === MY_CAR);
const myCarIsntThere = (building) => !building.some(isMyCarParkedOnSomeFloor);

const isInvalidParking = (building) =>
  isntAnArray(building) || isEmpty(building) || myCarIsntThere(building);

const inWhichParkingSlotIsMyCar = (building) => building[0].indexOf(MY_CAR) + 1;

const moveToTheExit = (building) => {
  const direction = MOVE_RIGHT;
  const parkingSize = building[0].length;
  const steps = parkingSize - inWhichParkingSlotIsMyCar(building);
  return direction.concat(steps);
};

function carParkEscape(building) {
  if (isInvalidParking(building)) return 'ERROR';

  return moveToTheExit(building);
}

module.exports = { carParkEscape, inWhichParkingSlotIsMyCar };
