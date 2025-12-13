const sumAll = require('./sumAll.js');

describe('Sum All Test', () => {
    test('should return the sum of all numbers between num1 and num2 inclusive', () => {
        expect(sumAll(1, 4)).toBe(10); // 1 + 2 + 3 + 4 = 10
    });
    test('should return the sum of all numbers between num1 and num2 inclusive', () => {
        expect(sumAll(1, 0)).toBe(0); // 1 + 2 + 3 + 4 = 10
    });
    test('should return the sum of all numbers between num1 and num2 inclusive', () => {
        expect(sumAll(1, 100)).toBe(5050); // 1 + 2 + 3 + 4 = 10
    });
    test('should return the sum of all numbers between num1 and num2 inclusive', () => {
        expect(sumAll(-5, 5)).toBe(0); // 1 + 2 + 3 + 4 = 10
    });
});