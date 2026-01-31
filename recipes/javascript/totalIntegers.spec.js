const totalIntegers = require('./totalIntegers.js');
describe('Interger count', () => {
    test('should return the total number of integers in the array', () => {
        expect(totalIntegers([1, '2', 3, 4, 'five'])).toEqual(3);
    });
    test('Works with negative numbers', () => {
    expect(totalIntegers([5, 7, -7, [45, -1, -0], [4, 7, -4, -4, -4, [777777, -45674]], [-5477654]])).toEqual(14);
  });
    test('should return the total number of integers in the array', () => {
        expect(totalIntegers(['five'])).toEqual(0);
    });
});
