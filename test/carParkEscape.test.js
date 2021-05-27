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
      test('should return ERROR for an empty array [[]]', () => {
        const emptyArray = [[]];
        expect(carParkEscape(emptyArray)).toBe('ERROR');
      });
      test("should return ERROR if my car isn't parked inside", () => {
        const haventParkedInside = [[0, 0, 0, 0, 0, 0]];
        expect(carParkEscape(haventParkedInside)).toBe('ERROR');
      });
    });
    describe('Where is my car?', () => {
      test('should return parking #1 for 🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️', () => {
        const parkedOnSlot1 = [['🚘', 0, 0, 0, 0, 0]];
        expect(inWhichParkingSlotIsMyCar(parkedOnSlot1)).toBe(1);
      });
      test('should return parking #6 for 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🚘', () => {
        const parkedOnSlot6 = [[0, 0, 0, 0, 0, '🚘']];
        expect(inWhichParkingSlotIsMyCar(parkedOnSlot6)).toBe(6);
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
    test('accept multi floor parking like [[1, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0]]', () => {
      const twoFloorParking = [
        [1, 0, 0, 0, 0, 0],
        [0, '🚘', 0, 0, 0, 0],
      ];
      expect(carParkEscape(twoFloorParking)).not.toBe('ERROR');
    });
  });
});
