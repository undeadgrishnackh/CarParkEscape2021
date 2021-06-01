// US --> https://jsw.ibm.com/browse/EUA-3867
const { carPark } = require('../src/carparkBABU.js');

describe('US#1 - The grocery store flat parking', () => {
  describe('UAT1: flat grocery (one floor) store with only ONE parking slot === [0]', () => {
    it('should return ERROR in case of undefined INPUT', () => {
      expect(carPark()).toEqual('ERROR');
    });
    test("should reject any INPUT that isn't an ARRAY", () => {
      expect(carPark('WONR ARRAY')).toEqual('ERROR');
    });
    test('should reject an EMPTY parking with am EMPTY ARRAY', () => {
      expect(carPark([])).toEqual('ERROR');
    });
    test("should rejct a parking where my car isn't there", () => {
      expect(carPark([0])).toEqual('ERROR');
    });
    test('UAT1: should return R0 for [2]', () => {
      expect(carPark([2])).toEqual(['R0']);
    });
  });
  describe('UAT2: flat grocery store (one floor) with SIX parking slots === [0,0,0,0,0,0]', () => {
    test('should return "R5" when I park on the slot one [2,0,0,0,0,0]', () => {
      expect(carPark([2, 0, 0, 0, 0, 0])).toEqual(['R5']);
    });
    test('should reject any elements different from CAR (2) or EMPTY_SLOT (0)', () => {
      // TODO: be carefull with nested behavoirs!!!
      expect(carPark([123, 2])).toEqual('ERROR');
    });
  });
});

describe.skip('Escaping from a two-floor car park', () => {
  test('If the stair on the right, steps right and down', () => {
    expect(
      carPark([
        [2, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
      ])
    ).toEqual(['R4', 'D1']);
  });
});
