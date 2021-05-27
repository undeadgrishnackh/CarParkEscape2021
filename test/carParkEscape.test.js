const carParkEscape = require('../src/carParkEscape.js');

describe('Car Park Escape', () => {
  describe('US1 - Given [2,0,0,0,0,0] as a Flat car park', () => {
    test('WHEN I request the shortest path to the exit, THEN I receive "R5"', () => {
      const FlatParking = [2, 0, 0, 0, 0, 0];
      expect(carParkEscape(FlatParking)).toBe('R5');
    });
  });
});
