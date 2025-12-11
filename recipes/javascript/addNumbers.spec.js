
const addNumbers = require('../javascript/addNumbers');
describe('addNumbers', () => {
  test('adds the numbers together', () => {
    expect(addNumbers()).toEqual(2);
  });
});