const MOVE_TO_THE_RIGHT = 'R';

const isAnArray = (parkingLot) => Array.isArray(parkingLot);
const isntAnArray = (parkingLot) => !isAnArray(parkingLot);
const isntAnArrayOfArrays = (parkingLot) => !parkingLot.every(isAnArray);
const isAParkingWithoutSlots = (parkingLot) => parkingLot.length === 0;
const isMyCarPresentInThisFloor = (parkingLot) => !(parkingLot.indexOf(2) === -1);
const isMyCarPresentInTheBuilding = (parkingLot) => !parkingLot.some(isMyCarPresentInThisFloor);
const isntAProperParkingLot = (parkingLot) =>
  isntAnArray(parkingLot) ||
  isntAnArrayOfArrays(parkingLot) ||
  isAParkingWithoutSlots(parkingLot) ||
  isMyCarPresentInTheBuilding(parkingLot);

// FIXME: TECHDEBT for the [[]] hardcoded top ground floor
function whereIsMyCar(parkingLot) {
  return parkingLot[0].indexOf(2);
}

// FIXME: TECHDEBT for the [[]] hardcoded top ground floor
const floorSize = (parkingLot) => parkingLot[0].length;
const moveMultipleSteps = (parkingLot) => floorSize(parkingLot) - (whereIsMyCar(parkingLot) + 1);

const moveToTheExit = (parkingLot) => {
  const numberOfMovement = moveMultipleSteps(parkingLot);
  return [`${MOVE_TO_THE_RIGHT}${numberOfMovement.toString()}`];
};
// -------

function carParkEscape(parkingLot) {
  if (isntAProperParkingLot(parkingLot)) {
    return 'error';
  }

  return moveToTheExit(parkingLot);
}

module.exports = { carParkEscape };
