const RFA = require('./removeFromArray.js');

describe('Remove From Array Test', () => {
    test('should remove the specified element from the array', () => {
        expect(RFA([1, 2, 3, 4, 5, 6, 5])).toEqual([1, 2, 3, 4, 6]);
    });
    test('should remove the specified element from the array', () => {
        expect(RFA([1, 2, 3, 4, 6])).toEqual([1, 2, 3, 4, 6]);
    });
});