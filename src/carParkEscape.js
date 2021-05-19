const isArray = (parkingLot) => Array.isArray(parkingLot);

const hasCar = (parkingLot) => parkingLot.filter((val) => val === 2).length === 1;

const rejectIncorrectParkingLot = (parkingLot) => {
  if (!isArray(parkingLot) || !hasCar(parkingLot)) {
    throw Error('ERR');
  }
};

class CarParkEscape {
  constructor(parkingLot) {
    this.parkingLot = parkingLot;
    this.parkingLotSize = this.getParkingLotSize();
    this.right = 'R';
    rejectIncorrectParkingLot(parkingLot);
  }

  carPosition() {
    return this.parkingLot.indexOf(2);
  }

  getExitDirection() {
    return this.right;
  }

  getParkingLotSize() {
    return this.parkingLot.length - 1;
  }

  getStepsToExit() {
    const stepsToExit = this.parkingLotSize - this.carPosition();
    return stepsToExit.toString();
  }

  shortestPathToExit() {
    return `${this.getExitDirection()}${this.getStepsToExit()}`;
  }
}

module.exports = CarParkEscape;
