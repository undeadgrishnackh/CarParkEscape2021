const CarParkEscape = require('../src/carParkEscape.js');

describe('Gardians to clean the input', () => {
  test('should reject a wrong parking', () => {
    expect(() => new CarParkEscape('bad parking')).toThrow('ERR');
  });

  test('should reject a parking withot my car parked there.', () => {
    expect(() => new CarParkEscape([0])).toThrow('ERR');
  });
});

describe('Scenario 1 - Flat grocery store park', () => {
  describe('GIVEN a parking with only 1 slot', () => {
    test.skip('WHEN i park there, should expect "R0" as the shortest path to the exit.', () => {
      const dummy = new CarParkEscape();
      expect(dummy).toBe('R0');
    });
    test.skip('should go to the right...', () => {
      expect(undefined).toContain('R');
    });

    test.skip('should understand we are at the exit', () => {
      expect(undefined).toContain('0');
    });
  });
});
