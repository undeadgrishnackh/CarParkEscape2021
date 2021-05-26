const CarParkEscape = require('../src/carParkEscape.js');

describe('US1 - Flat Gocrey store parking.', () => {
  describe('UAT 1 - Flat grocery store parking lot [2,0,0,0,0,0]', () => {
    describe('GIVEN the [2,0,0,0,0,0] parking lot', () => {
      describe('WHEN I request the shortest path to the exit', () => {
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

          test('THEN should receive "R5" as the shortest path to the exit.', () => {
            const carParkEscape = new CarParkEscape([2, 0, 0, 0, 0, 0]);
            expect(carParkEscape.shortestPathToExit()).toBe('R5');
          });
        });
      });
    });
  });

  describe('UAT 2 - Flat grocery store parking lot [0,2,0,0,0,0]', () => {
    describe('GIVEN the [0,2,0,0,0,0] parking lot', () => {
      describe('WHEN I request the shortest path to the exit', () => {
        test('THEN should receive "4" steps', () => {
          const carParkEscape = new CarParkEscape([0, 2, 0, 0, 0, 0]);
          expect(carParkEscape.getStepsToExit()).toContain('4');
        });

        test('THEN should receive "R4" as the shortest path to the exit.', () => {
          const carParkEscape = new CarParkEscape([0, 2, 0, 0, 0, 0]);
          expect(carParkEscape.shortestPathToExit()).toBe('R4');
        });
      });
    });
  });
});

describe('US2: 2-floors parking', () => {
  describe('UAT 4: parking on the ground floor', () => {
    describe('GIVEN [[0,0,0,0,0,1],[0,2,0,0,0,0]] as the parking lot', () => {
      describe('WHEN I request the shortest path to the exit', () => {
        describe('is a 2 floors parking?', () => {
          test('should throw an error if not a 2 dimensional array', () => {
            expect(() => new CarParkEscape([[2], 'blah'])).toThrow('ERR');
          });

          test('should throw an error if not a 2 dimensional array of arrays', () => {
            expect(() => new CarParkEscape(['blah', [2]])).toThrow('ERR');
          });
          test('should reject everything other than 0, 1, 2', () => {
            // reject everhing else than {0,1,2}
            expect(
              () =>
                new CarParkEscape([
                  [2, 0, 1],
                  [3, 0, 0],
                ])
            ).toThrow('ERR');
          });
        });
      });
    });
  });
});
