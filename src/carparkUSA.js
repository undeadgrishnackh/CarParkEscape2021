class CarPark {
  floors;

  spot;

  exit;

  constructor(spotToOccupy) {
    this.floors = 1;
    this.spot = spotToOccupy;
    this.exit = 2;
  }
}
module.exports = CarPark;
