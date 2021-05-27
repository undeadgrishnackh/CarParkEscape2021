const MOVE_RIGHT = 'R';
const MY_CAR = '🚘';

const isntTheBuildingIntoAnArray = (building) => !Array.isArray(building);
const isntTheGroundFloorIntoAnArray = (floor) => !Array.isArray(floor);
const isAnEmptyParking = (building) => building.length === 0;
const isMyCarParkedOnSomeFloor = (floor) => floor.some((parking) => parking === MY_CAR);
const myCarIsntThere = (building) => !building.some(isMyCarParkedOnSomeFloor);
const areStaircasesOnGroundFloor = (building) => building[building.length - 1].includes(1);
const isntProperParkingBuilding = (building) =>
  isntTheBuildingIntoAnArray(building) ||
  isntTheGroundFloorIntoAnArray(building[0]) ||
  areStaircasesOnGroundFloor(building);
const isInvalidParking = (building) =>
  isntProperParkingBuilding(building) || isAnEmptyParking(building) || myCarIsntThere(building);

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
