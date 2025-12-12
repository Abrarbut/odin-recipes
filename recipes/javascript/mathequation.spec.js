const mathequation = require('./mathequation')

describe('Hello guys', () => {
    test('should return the correct sum of 2 + 2', () => {
        expect(mathequation).toBe(4)
    })
});