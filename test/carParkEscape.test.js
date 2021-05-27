const { carParkEscape, inWhichParkingSlotIsMyCar } = require('../src/carParkEscape.js');

describe('US#1 - Flat Car Park', () => {
  describe('Given 🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️  as a Flat car park', () => {
    test('WHEN I request the shortest path to the exit, THEN I receive "R5"', () => {
      const FlatParking = [['🚘', 0, 0, 0, 0, 0]];
      expect(carParkEscape(FlatParking)).toBe('R5');
    });
    describe('Am I in a parlking lot?', () => {
      test("should retunr ERROR for 'invalid input'", () => {
        expect(carParkEscape('invalid input')).toBe('ERROR');
      });
      test('should return ERROR for an empty array []', () => {
        const emptyArray = [];
        expect(carParkEscape(emptyArray)).toBe('ERROR');
      });
      test('should return ERROR for a parking into a single array building [🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ]', () => {
        const singleArray = [0, 0, 0, 0, 0, 0];
        expect(carParkEscape(singleArray)).toBe('ERROR');
      });
      test('should return ERROR for an empty array [[]]', () => {
        const emptyMultiArray = [[]];
        expect(carParkEscape(emptyMultiArray)).toBe('ERROR');
      });
      test("should return ERROR if my car isn't parked inside", () => {
        const haventParkedInside = [[0, 0, 0, 0, 0, 0]];
        expect(carParkEscape(haventParkedInside)).toBe('ERROR');
      });
    });
    describe('Where is my car?', () => {
      test('should return parking #1 for 🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️', () => {
        const parkedOnSlot1 = [['🚘', 0, 0, 0, 0, 0]];
        expect(inWhichParkingSlotIsMyCar(parkedOnSlot1).slot).toBe(1);
      });
      test('should return parking #6 for 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🚘', () => {
        const parkedOnSlot6 = [[0, 0, 0, 0, 0, '🚘']];
        expect(inWhichParkingSlotIsMyCar(parkedOnSlot6).slot).toBe(6);
      });
    });
    describe('Move to the exit', () => {
      test('should move to the RIGHT', () => {
        const parkedOnSlot1 = [['🚘', 0, 0, 0, 0, 0]];
        expect(carParkEscape(parkedOnSlot1)).toContain('R');
      });
      test('should move multiple steps', () => {
        const parkedOnSlot1 = [['🚘', 0, 0, 0, 0, 0]];
        expect(carParkEscape(parkedOnSlot1)).toContain('5');
      });
      const parkedOnSlot6 = [[0, 0, 0, 0, 0, '🚘']];
      expect(carParkEscape(parkedOnSlot6)).toContain('0');
    });
  });
});

describe('US#2 - 2 floors Car Park', () => {
  describe('UAT1: Given "[[1,0,0,0,0,0],[0,2,0,0,0,0]]" as a 2 floors parking', () => {
    test('I ask to find the shortest path to the exit, Then I receive "R4" ', () => {
      const twoFloorParking = [
        [1, 0, 0, 0, 0, 0],
        [0, '🚘', 0, 0, 0, 0],
      ];
      expect(carParkEscape(twoFloorParking)).toBe('R4');
    });
  });
  describe('Is this a multi floors parking?', () => {
    const buildingWithoutParkingSlots = [[], []];
    const oneFloorWithoutParking = [[], [1, 0, 0, 0, 0]];
    const parkedOnFlatParking = [[0, 0, 0, 0, 0, '🚘']];
    const parkedOnTheGroundFloor = [
      [1, 0, 0, 0, 0, 0],
      [0, '🚘', 0, 0, 0, 0],
    ];
    const parkedOnTheFirstFloor = [
      [1, 0, 0, '🚘', 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const buildingWithStairsOnGroundFloor = [
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, '🚘', 0, 0],
    ];
    const buildingWithoutStairsOtTheFirstFloor = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, '🚘', 0, 0],
    ];
    test('should reject multi floor parking without parking slots - [[], []]', () => {
      expect(carParkEscape(buildingWithoutParkingSlots)).toBe('ERROR');
    });
    test('should reject a parking with an empty floor - [[], [1, 0, 0, 0, 0]]', () => {
      expect(carParkEscape(oneFloorWithoutParking)).toBe('ERROR');
    });
    test('should accept a building with a flat parking (only one floor) - [[🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🚘]]', () => {
      expect(carParkEscape(parkedOnFlatParking)).not.toBe('ERROR');
    });
    test('shouold accept my car parked on the ground floor - [[⬇️ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ],[🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ]]', () => {
      expect(carParkEscape(parkedOnTheGroundFloor)).not.toBe('ERROR');
    });
    test('should accept my car parked on the first floor - [[⬇️ 🅿️ 🅿️ 🚘 🅿️ 🅿️ ],[🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ]]', () => {
      expect(carParkEscape(parkedOnTheFirstFloor)).not.toBe('ERROR');
    });
    test('should reject a building with staircase at ground floor - [[🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ],[⬇️ 🅿️ 🅿️ 🚘 🅿️ 🅿️ ]]', () => {
      expect(carParkEscape(buildingWithStairsOnGroundFloor)).toBe('ERROR');
    });
    test('should reject a building without staircase at first floor - [[🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ],[🅿️ 🅿️ 🅿️ 🚘 🅿️ 🅿️ ]]', () => {
      expect(carParkEscape(buildingWithoutStairsOtTheFirstFloor)).toBe('ERROR');
    });
  });
  describe('Where is my car? In which floor and parking slot have I parked? 🤔', () => {
    test('should return floor 0, slot 2 for [[⬇️ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ],[🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ]]', () => {
      const parkedOnSlot1Floor0 = [
        [1, 0, 0, 0, 0, 0],
        [0, '🚘', 0, 0, 0, 0],
      ];
      const parkedOn = inWhichParkingSlotIsMyCar(parkedOnSlot1Floor0);
      expect(parkedOn.floor.floorNumber).toBe(0);
      expect(parkedOn.slot).toBe(2);
    });
    test('should return floor 1, slot 3 for [[⬇️ 🅿️ 🚘 🅿️ 🅿️ 🅿️ ],[ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ ]]', () => {
      const parkedOnSlot1Floor0 = [
        [1, 0, '🚘', 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const parkedOn = inWhichParkingSlotIsMyCar(parkedOnSlot1Floor0);
      expect(parkedOn.floor.floorNumber).toBe(1);
      expect(parkedOn.slot).toBe(3);
    });
  });
});
