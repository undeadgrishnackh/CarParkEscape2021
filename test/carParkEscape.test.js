const CarParkEscape = require('../src/carParkEscape.js');

describe('Scenario 1 - Flat grocery store parking lot [2,0,0,0,0,0]', () => {
  describe('Am I in a parking lot?', () => {
    test('should throw an error if parking lot is not an array', () => {
      expect(() => new CarParkEscape('bad parking')).toThrow('ERR');
    });

    //! ! TODO: this behavior is not covered with a specific funtion, but is incapsulated from the hasCar.
    test('should throw an error if the parking lot array is empty', () => {
      expect(() => new CarParkEscape([])).toThrow('ERR');
    });

    test('should throw an error if my car is not parked there.', () => {
      expect(() => new CarParkEscape([0])).toThrow('ERR');
    });
  });

  describe('Where is my car?', () => {
    test('Should return 0 as the index of my car', () => {
      const carParkEscape = new CarParkEscape([2, 0, 0, 0, 0, 0]);
      expect(carParkEscape.carPosition()).toBe(0);
    });
  });

  describe('Move to the exit', () => {
    test('should return "R" when exit is to the RIGHT', () => {
      const carParkEscape = new CarParkEscape([2, 0, 0, 0, 0, 0]);
      expect(carParkEscape.getExitDirection()).toContain('R');
    });

    test('should return "5" for a parking lot like this [2,0,0,0,0,0]', () => {
      const carParkEscape = new CarParkEscape([2, 0, 0, 0, 0, 0]);
      expect(carParkEscape.getStepsToExit()).toContain('5');
    });
  });

  describe('GIVEN the [2,0,0,0,0,0] parking lot', () => {
    describe('WHEN I request the shortest path to the exit', () => {
      test('THEN should receive "R5" as the shortest path to the exit.', () => {
        const carParkEscape = new CarParkEscape([2, 0, 0, 0, 0, 0]);
        expect(carParkEscape.shortestPathToExit()).toBe('R5');
      });
    });
  });
});

describe('Scenario 2 - Flat grocery store parking lot [0,2,0,0,0,0]', () => {
  describe('GIVEN the [0,2,0,0,0,0] parking lot', () => {
    describe('WHEN I request the shortest path to the exit', () => {
      test('THEN should receive "R5" as the shortest path to the exit.', () => {
        const carParkEscape = new CarParkEscape([0, 2, 0, 0, 0, 0]);
        expect(carParkEscape.shortestPathToExit()).toBe('R4');
      });
    });
  });

  test('should return "4" for a parking lot like this [0,2,0,0,0,0]', () => {
    const carParkEscape = new CarParkEscape([0, 2, 0, 0, 0, 0]);
    expect(carParkEscape.getStepsToExit()).toContain('4');
  });
});
