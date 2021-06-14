const isTheBuildingAnArray = (parkingLot) => Array.isArray(parkingLot);
const isTheBuildingNotAnArray = (parkingLot) => !isTheBuildingAnArray(parkingLot);
//! !TODO: FIX --> Not working test is red!
const isTheBuildingEmpty = (parkingLot) => parkingLot.length === 0;
const isTheFloorWithoutWalls = (floor) => !Array.isArray(floor);
const isTheFloorEmpty = (floor) => floor.length === 0;
const isTheBuildingWithAnEmptyOrMissingFloor = (building) =>
  building.some((floor) => isTheFloorWithoutWalls(floor) || isTheFloorEmpty(floor));
const isInSomeFloorParkedMyCar = (floor) => floor.filter((val) => val === 2).length === 0;
const isMyCarParkedOutsideTheBuilding = (building) => building.some(isInSomeFloorParkedMyCar);

class CarParkEscape {
  constructor(building) {
    this.building = building;

    // this.checkIfIsValidBuild();
    // checkIfMyCarParkedOutsideTheBuilding(parkingLot);
    // this.parkingLotSize = this.getParkingLotSize();
    // this.right = 'R';
  }

  checkIfMyCarParkedOutsideTheBuilding() {
    if (isMyCarParkedOutsideTheBuilding(this.building)) {
      throw Error('ERR');
    }
  }

  checkIfIsValidBuild() {
    if (
      isTheBuildingNotAnArray(this.building) ||
      isTheBuildingEmpty(this.building) ||
      isTheBuildingWithAnEmptyOrMissingFloor(this.building)
    ) {
      throw Error('ERR');
    }
  }

  carPosition() {
    return {
      floor: 0,
      spot: this.building[0].indexOf(2),
    };
  }

  getExitDirection() {
    return this.right;
  }

  getParkingLotSize() {
    //! ! TODO: the floor size isn't scaling to multifloor
    return this.building[0].length - 1;
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
