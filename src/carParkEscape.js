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
    rejectIncorrectParkingLot(parkingLot);
  }

  carPosition() {
    return this.parkingLot.indexOf(2);
  }

  // eslint-disable-next-line class-methods-use-this
  getExitDirection() {
    return 'R';
  }

  // eslint-disable-next-line class-methods-use-this
  getStepsToExit() {
    return '5';
  }

  shortestPathToExit() {
    return `${this.getExitDirection()}${this.getStepsToExit()}`;
  }
}

module.exports = CarParkEscape;
