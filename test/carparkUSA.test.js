const { carParkEscape } = require('../src/carparkUSA.js');

describe('US#1 - The grocery store flat parking', () => {
  describe('GIVEN a flat parkig like [[2, 0, 0, 0, 0, 0]], WHEN I ask for the fastest escape', () => {
    it('THEN should receive "R5"', () => {
      const parkingLot = [[2, 0, 0, 0, 0, 0]];
      const exitToRoute = ['R5'];
      expect(carParkEscape(parkingLot)).toEqual(exitToRoute);
    });
  });
  describe('💂‍ Guardian to prevent crap from getting in the parking lot', () => {
    test('should reject input different than an array', () => {
      const parkingLot = 'parking';
      expect(carParkEscape(parkingLot)).toEqual('error');
    });
    test('should reject empty arrays', () => {
      const parkingLot = [[]];
      expect(carParkEscape(parkingLot)).toEqual('error');
    });
    test('should reject a parking wihtout my car', () => {
      const parkingLot = [[0, 0, 0, 0, 0, 0]];
      expect(carParkEscape(parkingLot)).toEqual('error');
    });
    test('should accept a parking wiht my car', () => {
      const parkingLot = [[0, 0, 2, 0, 0, 0]];
      expect(carParkEscape(parkingLot)).not.toEqual('error');
    });
  });

  describe('⚙️⚙️  - Unit tests - User behavioral flow', () => {
    describe('find my car 🏎  in the parking lot', () => {
      it('find my car in parking lot with 1 floor', () => {
        const parkingLot = [[0, 2, 0]];
        const position = 1;
        // FIXME: bad way to test it.... expose the whereIsMyCar.
        // TODO: in US#2 is necessary to revamp the whereIsMyCar from spot# to a tupla
        // floor; spot#
        expect(carParkEscape(parkingLot)[0]).toContain(position);
      });
      test('should move to the RIGHT when the parking is [[0, 0, 2, 0, 0, 0]]', () => {
        const parkingLot = [[0, 0, 2, 0, 0, 0]];
        expect(carParkEscape(parkingLot)[0]).toContain('R');
      });
      test('should move 3 steps when the parking is [[0, 0, 2, 0, 0, 0]]', () => {
        const parkingLot = [[0, 0, 2, 0, 0, 0]];
        expect(carParkEscape(parkingLot)[0]).toContain('3');
      });
    });
  });
});

describe('US#2 - two floors parking', () => {
  describe('GIVEN a 2 floors parkig like [[1, 0, 0, 0, 0, 0],[0, 2, 0, 0, 0, 0]], WHEN I ask for the fastest escape', () => {
    it('THEN should receive "R4"', () => {
      const parkingLot = [
        [1, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
      ];
      const exitToRoute = ['R4'];
      expect(carParkEscape(parkingLot)).toEqual(exitToRoute);
    });
  });
  describe('💂‍ Guardian to prevent crap from getting in the parking lot', () => {
    test('should accept a 2 floors parking lot like this [[1, 0, 0, 0, 0, 0],[0, 2, 0, 0, 0, 0]]', () => {
      const parkingLot = [
        [1, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
      ];
      expect(carParkEscape(parkingLot)).not.toEqual('error');
    });
    test('should reject a 2 floors parking lot like this ["blah","blah",[0, 2, 0, 0, 0, 0]]', () => {
      const parkingLot = ['blah', 'blah', [0, 2, 0, 0, 0, 0]];
      expect(carParkEscape(parkingLot)).toEqual('error');
    });
    test.skip('should reject a parking [[0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0]] where the stairscase are not present', () => {
      const parkingLot = [
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
      ];
      expect(carParkEscape(parkingLot)).toEqual('error');
    });
    test.skip('should reject a parking [[0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]] where the stairscase are not present', () => {
      const parkingLot = [
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      expect(carParkEscape(parkingLot)).toEqual('error');
    });
  });
});
