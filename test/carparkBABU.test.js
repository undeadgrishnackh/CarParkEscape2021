// US --> https://jsw.ibm.com/browse/EUA-3867
const { carPark } = require('../src/carparkBABU.js');

describe('GIVEN an invalid parking lot', () => {
  //! ! TODO: after US2 revamp with a proper GIVEN/WHEN/THEN
  it('👮‍♀️ should return ERROR in case of undefined INPUT instead of an array of arrays', () => {
    expect(carPark()).toEqual('ERROR');
  });
  test("👮‍♀️ should reject any INPUT that isn't an ARRAY of arrays", () => {
    expect(carPark('WONT ARRAY')).toEqual('ERROR');
  });
  test('👮‍♀️ should reject a parking as a simple ARRAY', () => {
    expect(carPark([])).toEqual('ERROR');
  });
  test('👮‍♀️ should reject an EMPTY parking with am EMPTY ARRAY of Arrays', () => {
    expect(carPark([[]])).toEqual('ERROR');
  });
  test("👮‍♀️ should rejct a parking like this [[0]] where my car isn't parked there", () => {
    expect(carPark([[0]])).toEqual('ERROR');
  });
  test('👮‍♀️ should reject any elements in a floor of the building that are different from CAR (2) or EMPTY_SLOT (0)', () => {
    //! ! TODO: be carefull with nested behavoirs!!! The guard is positional impacted. REFACTOR NEEDED ASAP.
    expect(carPark([[123, 2]])).toEqual('ERROR');
  });
  test('👮‍♀️ should reject a parking in a simple arrays [2, 0, 0, 0, 0, 0] as INPUT', () => {
    expect(carPark([2, 0, 0, 0, 0, 0])).toEqual('ERROR');
  });
  test('👮‍♀️ should accept a parking in an array of arrays [[2, 0, 0, 0, 0, 0]] as INPUT', () => {
    expect(carPark([[2, 0, 0, 0, 0, 0]])).not.toEqual('ERROR');
  });
});

describe('US#1 - The grocery store flat parking', () => {
  describe('UAT1: GIVEN a flat grocery (one floor) parking [[2]] WHEN I ask for escape it', () => {
    test('THEN should return ["R0"].', () => {
      expect(carPark([[2]])).toEqual(['R0']);
    });
  });
  describe('UAT2: GIVEN flat grocery store (one floor) with SIX parking slots === [[2,0,0,0,0,0]] WHEN I ask for escape it', () => {
    test('THEN should return ["R5"].', () => {
      expect(carPark([[2, 0, 0, 0, 0, 0]])).toEqual(['R5']);
    });
  });
});

describe('US#2 - The two-floors car parking', () => {
  // [[0,0,0,0,0,0],[2,0,0,0,0,0]] --> R5
  describe('GIVEN a two-floors parking lot [[0,0,0,0,0,0],[2,0,0,0,0,0]] WHEN I ask for escape it', () => {
    test('THEN should return ["R5"]', () => {
      expect(
        carPark([
          [0, 0, 0, 0, 0, 0],
          [2, 0, 0, 0, 0, 0],
        ])
      ).toEqual(['R5']);
    });
  });
  describe.skip('GIVEN a two-floors parking lot with the stair on the right WHEN I ask for escape it', () => {
    test('THEN should return ["R4", "D1"]', () => {
      expect(
        carPark([
          [2, 0, 0, 0, 1],
          [0, 0, 0, 0, 0],
        ])
      ).toEqual(['R4', 'D1']);
    });
  });
});
