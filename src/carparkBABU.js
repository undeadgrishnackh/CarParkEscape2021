const RIGHT = 'R';
const CAR = 2;
const EMPTY_SLOT = 0;

const isMyCarParkedOutsideTheParking = (building) => !building.includes(CAR);
const isTheParkingAnEmptyBuilding = (building) => building.length === 0;
const isTheParkingAWrongArray = (building) => !Array.isArray(building);
const isInTheBuildingSomeStrangeItem = (building) => {
  // !!! TECH_DEBT: complexity must be reduced!
  for (let parkingSlot = 0; parkingSlot < building.length; parkingSlot += 1) {
    if (building[parkingSlot] !== CAR && building[parkingSlot] !== EMPTY_SLOT) {
      return true;
    }
  }
  return false;
};

const checkForWrongInput = (building) =>
  isTheParkingAWrongArray(building) ||
  isTheParkingAnEmptyBuilding(building) ||
  isMyCarParkedOutsideTheParking(building) ||
  isInTheBuildingSomeStrangeItem(building);

const floorSize = (building) => building.length;
const whereIsMyCar = (building) => building.indexOf(CAR);

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
