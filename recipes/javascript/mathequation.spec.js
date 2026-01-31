const {sum, diff} = require('./mathequation')

describe('Hello guys', () => {
    test('should return the correct sum of 2 + 2', () => {
        expect(sum).toBe(4)
    })
    test('should return 10 -4 = 6', () => {
        expect(diff).toBe(6)
    })
});