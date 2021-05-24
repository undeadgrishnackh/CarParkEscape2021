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
  if (parkingLot.indexOf(2) === -1) {
    return false;
  }
  return true;
}

function Carpark(parkingLot) {
  const routeToExit = [];
  if (!Array.isArray(parkingLot) || parkingLot.length === 0 || !isMyCarPresent(parkingLot)) {
    return 'error';
  }
  function whereIsMyCar(parkingLot) {
    return parkingLot.indexOf(2);
  }

  // return whereIsMyCar(parkingLot);
  const numberOfMovement = parkingLot.length - (whereIsMyCar(parkingLot) + 1);
  routeToExit[0] = `R${numberOfMovement.toString()}`;
  return routeToExit;
}

module.exports = { Carpark };
