const MOVE_RIGHT = 'R';
const MY_CAR = '🚘';

const isntTheBuildingIntoAnArray = (building) => !Array.isArray(building);
const isntTheGroundFloorIntoAnArray = (floor) => !Array.isArray(floor);
const isAnEmptyParking = (building) => building.length === 0;
const isMyCarParkedOnThisFloor = (floor) => floor.some((parking) => parking === MY_CAR);
const myCarIsntThere = (building) => !building.some(isMyCarParkedOnThisFloor);
const areStaircasesOnGroundFloor = (building) => building[building.length - 1].includes(1);
const arentStaircasesOnFirstFloor = (building) =>
  building.length > 1 ? !building[0].includes(1) : false;
const isntProperParkingBuilding = (building) =>
  isntTheBuildingIntoAnArray(building) ||
  isntTheGroundFloorIntoAnArray(building[0]) ||
  areStaircasesOnGroundFloor(building) ||
  arentStaircasesOnFirstFloor(building);
const isInvalidParking = (building) =>
  isntProperParkingBuilding(building) || isAnEmptyParking(building) || myCarIsntThere(building);

const inWhichFloorIsMyCar = (building) => {
  const carFoundedAtFloor = {};
  for (let rawFloorNumber = 0; rawFloorNumber < building.length; rawFloorNumber += 1) {
    if (isMyCarParkedOnThisFloor(building[rawFloorNumber])) {
      carFoundedAtFloor.floorNumber = building.length - 1 - rawFloorNumber;
      carFoundedAtFloor.rawFloorNumber = rawFloorNumber;
    }
  }
  return carFoundedAtFloor;
};
const inWhichParkingSlotIsMyCar = (building) => {
  const position = {};
  position.floor = inWhichFloorIsMyCar(building);
  position.slot = building[position.floor.rawFloorNumber].indexOf(MY_CAR) + 1;
  return position;
};
const moveToTheExit = (building) => {
  const direction = MOVE_RIGHT;
  const floorSize = building[0].length;
  const whereIsMyCar = inWhichParkingSlotIsMyCar(building);
  const steps = floorSize - whereIsMyCar.slot;
  const pathToTheExit = [direction.concat(steps)];
  for (let floor = whereIsMyCar.floor.rawFloorNumber + 1; floor < building.length; floor += 1) {
    pathToTheExit.push('D1');
  }
  return pathToTheExit.toString();
};

function carParkEscape(building) {
  if (isInvalidParking(building)) return 'ERROR';

  return moveToTheExit(building);
}

module.exports = { carParkEscape, inWhichParkingSlotIsMyCar };
