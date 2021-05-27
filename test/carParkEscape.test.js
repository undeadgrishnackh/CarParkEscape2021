const { carParkEscape, inWhichParkingSlotIsMyCar } = require('../src/carParkEscape.js');

describe('Car Park Escape', () => {
  describe('US1 - Given 🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️  as a Flat car park', () => {
    test('WHEN I request the shortest path to the exit, THEN I receive "R5"', () => {
      const FlatParking = ['🚘', 0, 0, 0, 0, 0];
      expect(carParkEscape(FlatParking)).toBe('R5');
    });
  });
  describe('Am I in a parlking lot?', () => {
    test("should retunr ERROR for 'invalid input'", () => {
      expect(carParkEscape('invalid input')).toBe('ERROR');
    });
    test('should return ERROR for an empty array []', () => {
      const emptyArray = [];
      expect(carParkEscape(emptyArray)).toBe('ERROR');
    });
    test("should return ERROR if my car isn' parked inside", () => {
      const haventParkedInside = [0, 0, 0, 0, 0, 0];
      expect(carParkEscape(haventParkedInside)).toBe('ERROR');
    });
  });
  describe('Where is my car?', () => {
    test('should return parking #1 for 🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️', () => {
      const parkedOnSlot1 = ['🚘', 0, 0, 0, 0, 0];
      expect(inWhichParkingSlotIsMyCar(parkedOnSlot1)).toBe(1);
    });
    test('should return parking #6 for 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ 🚘', () => {
      const parkedOnSlot6 = [0, 0, 0, 0, 0, '🚘'];
      expect(inWhichParkingSlotIsMyCar(parkedOnSlot6)).toBe(6);
    });
  });
  describe('Move to the exit', () => {
    test('should move to the RIGHT', () => {
      const parkedOnSlot1 = ['🚘', 0, 0, 0, 0, 0];
      expect(carParkEscape(parkedOnSlot1)).toContain('R');
    });
    test('should move multiple steps', () => {
      const parkedOnSlot1 = ['🚘', 0, 0, 0, 0, 0];
      expect(carParkEscape(parkedOnSlot1)).toContain('5');
    });
    const parkedOnSlot6 = [0, 0, 0, 0, 0, '🚘'];
    expect(carParkEscape(parkedOnSlot6)).toContain('0');
  });
});
