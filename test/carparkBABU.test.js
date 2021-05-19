const carPark = require('../src/carparkBABU.js');

describe('The grocery store flat parking', () => {
  it('should return ERROR in case no slots provided', () => {
    expect(carPark()).toEqual('ERROR');
  });
  test('car should be inside', () => {
    expect(carPark([0, 2, 1]).includes(2)).toBe(true);
  });
});

describe('Escaping from a two-floor car park', () => {
  test('If the stair on the right, steps right and down', () => {
    expect(
      carPark([
        [2, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
      ])
    ).toEqual(['R4', 'D1']);
  });
});
