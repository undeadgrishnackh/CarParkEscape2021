const isArray = (parkingLot) => Array.isArray(parkingLot);

const hasCar = (parkingLot) => parkingLot.filter((val) => val === 2).length === 1;

const rejectIncorrectParkingLot = (parkingLot) => {
  if (!isArray(parkingLot) || !hasCar(parkingLot)) {
    throw Error('ERR');
  }
};

class CarParkEscape {
  constructor(parkingLot) {
    rejectIncorrectParkingLot(parkingLot);
  }
}

module.exports = CarParkEscape;
