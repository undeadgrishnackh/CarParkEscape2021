const isTheBuildingAnArray = (parkingLot) => Array.isArray(parkingLot);
const isTheBuildingNotAnArray = (parkingLot) => !isTheBuildingAnArray(parkingLot);
//! !TODO: FIX --> Not working test is red!
const isTheBuildingEmpty = (parkingLot) => parkingLot.length === 0;
const isTheBuildingWithAnEmptyGroundFloor = (parkingLot) =>
  !Array.isArray(parkingLot[0]) || parkingLot[0].length === 0;
const isInSomeFloorParkedMyCar = (floor) => floor.filter((val) => val === 2).length === 0;
const isMyCarParkedOutsideTheBuilding = (building) => building.some(isInSomeFloorParkedMyCar);

const checkIfIsValidBuild = (parkingLot) => {
  if (
    isTheBuildingNotAnArray(parkingLot) ||
    isTheBuildingEmpty(parkingLot) ||
    isTheBuildingWithAnEmptyGroundFloor(parkingLot)
  ) {
    throw Error('ERR');
  }
};

const checkIfMyCarParkedOutsideTheBuilding = (parkingLot) => {
  if (isMyCarParkedOutsideTheBuilding(parkingLot)) {
    throw Error('ERR');
  }
};

class CarParkEscape {
  constructor(parkingLot) {
    this.parkingLot = parkingLot;
    this.parkingLotSize = this.getParkingLotSize();
    this.right = 'R';

    checkIfIsValidBuild(parkingLot);
    checkIfMyCarParkedOutsideTheBuilding(parkingLot);
  }

  carPosition() {
    return {
      floor: 0,
      spot: this.parkingLot[0].indexOf(2),
    };
  }

  getExitDirection() {
    return this.right;
  }

  getParkingLotSize() {
    //! ! TODO: the floor size isn't scaling to multifloor
    return this.parkingLot[0].length - 1;
  }

  getStepsToExit() {
    //! ! TODO: the exit can be find only in a flat parking
    const stepsToExit = this.parkingLotSize - this.carPosition().spot;
    return stepsToExit.toString();
  }

  shortestPathToExit() {
    return `${this.getExitDirection()}${this.getStepsToExit()}`;
  }
}

module.exports = CarParkEscape;
