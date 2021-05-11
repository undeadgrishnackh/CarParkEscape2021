/* class CarPark {
  floors;

  spot;

  exit;

  constructor(spotToOccupy) {
    this.floors = 1;
    this.spot = spotToOccupy;
    this.exit = 2;
  }
} */

function isMyCarPresent(parkingLot) {
  // for (let i = 0; i < parkingLot.length; i++) {
  //   if (parkingLot[i] === 2) {
  //     return true;
  //   }
  // }
  return false;
}

function Carpark(parkingLot) {
  if (!Array.isArray(parkingLot) || parkingLot.length === 0 || !isMyCarPresent(parkingLot)) {
    return 'error';
  }
}

module.exports = { Carpark };
