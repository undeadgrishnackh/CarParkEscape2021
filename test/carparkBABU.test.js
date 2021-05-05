const carPark = require('../../src/carparkBABU.js');

describe('The grocery store flat parking', () => {
  test('should return ERROR in case no slots provided', () => {
    expect(carPark()).toEqual('ERROR');
  });
  test('car should be inside', () => {
    expect(carPark([0, 2, 1], 1).includes(2));
  });
});
