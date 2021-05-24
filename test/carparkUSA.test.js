const { Carpark } = require('../src/carparkUSA.js');

describe.skip('Scenario 1: The grocery store flat parking', () => {
  test('the parking lot should be flat', () => {
    const flatCarPark = new Carpark();
    const flat = 1;
    expect(flatCarPark.floors).toEqual(flat);
  });

  test('the car is parked inside it', () => {
    const flatCarPark = new Carpark(1);
    expect(flatCarPark.spot).toEqual(1);
  });

  test('the exit is on the extreme RIGHT', () => {
    const flatCarPark = new Carpark(1);
    expect(flatCarPark.exit).toEqual(2);
  });
});

describe('Unit tests behavioral flow', () => {
  describe('check the input', () => {
    it('Should reject not array', () => {
      const parkingLot = '';
      const errorMessage = 'error';
      expect(Carpark(parkingLot)).toEqual(errorMessage);
    });
    it('reject empty array', () => {
      const parkingLot = [];
      const errorMessage = 'error';
      expect(Carpark(parkingLot)).toEqual(errorMessage);
    });
    it('reject parking without any car parked there', () => {
      const parkingLot = [0, 0, 0];
      const errorMessage = 'error';
      expect(Carpark(parkingLot)).toEqual(errorMessage);
    });
  });
  describe('find my car in the parking lot', () => {
    it('find my car in parking lot with 1 floor', () => {
      const parkingLot = [0, 2, 0];
      const position = 1;

      expect(Carpark(parkingLot)).toEqual(position);
    });
  });
  describe('find our route to the exit', () => {
    it('find our route to the exit in parking lot with 1 floor', () => {
      const parkingLot = [0, 2, 0];
      const exitToRoute = ['R1'];

      expect(Carpark(parkingLot)).toEqual(exitToRoute);
    });
  });
});
