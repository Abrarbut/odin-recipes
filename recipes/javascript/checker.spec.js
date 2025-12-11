const checker = require('../javascript/checker')

describe('checker', () => {
  test('returns true when number is 1000', () => {
    expect(checker(1000)).toEqual(true);
  });
  test.skip('returns true when number is 10', () => {
    expect(checker(10)).toEqual(true);
  });
  test.skip('returns false when number is 9', () => {
    expect(checker(9)).toEqual(false);
  });
  test.skip('returns false when number is 6', () => {
    expect(checker(6)).toEqual(false);
  });
});