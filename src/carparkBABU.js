const RIGHT = 'R';
const CAR = 2;
const EMPTY_SLOT = 0;

const isAnArray = (building) => Array.isArray(building);
const isMyCarParkedOutsideTheParking = (building) => !building[0].includes(CAR); // !! WIP flat grocery parking
const isTheParkingAnEmptyBuilding = (building) => building.length === 0;
const isTheParkingAWrongArray = (building) => !isAnArray(building);
const checkIfSomeSlotsContainWrongElements = (element) => element !== EMPTY_SLOT && element !== CAR;
const isInTheBuildingSomeStrangeItem = (building) =>
  building[0].some(checkIfSomeSlotsContainWrongElements); // !! WIP flat grocery parking
const isTheParkingInAWrongMultifloorBuilding = (building) => !isAnArray(building[0]);

const checkForWrongInput = (building) =>
  isTheParkingAWrongArray(building) ||
  isTheParkingInAWrongMultifloorBuilding(building) || // !! check english semantic to prevent flat parking misunderstanding
  isTheParkingAnEmptyBuilding(building) ||
  isMyCarParkedOutsideTheParking(building) ||
  isInTheBuildingSomeStrangeItem(building); // !! this rule is on my way to some tests

const floorSize = (building) => building[0].length; // !! WIP flat grocery parking
const whereIsMyCar = (building) => building[0].indexOf(CAR); // !! WIP flat grocery parking

function moveToTheExit(building) {
  const direction = `${RIGHT}`;
  const steps = floorSize(building) - whereIsMyCar(building) - 1;
  return `${direction}${steps}`;
}

// ----------- Exported part
const carPark = (building) => {
  if (checkForWrongInput(building)) {
    return 'ERROR';
  }

  return [moveToTheExit(building)];
};

module.exports = { carPark };
