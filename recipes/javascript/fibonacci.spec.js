const fibonacci = require('./fibonacci.js');

describe('Fibonacci Test', () => {
    test('should return the nth Fibonacci number', () => {
        expect(fibonacci(1)).toEqual(1);
    });
    test('should return the nth Fibonacci number', () => {
        expect(fibonacci(2)).toEqual(1);
    });
    test('should return the nth Fibonacci number', () => {
        expect(fibonacci(3)).toEqual(2);
    });
    test('should return the nth Fibonacci number', () => {
        expect(fibonacci(4)).toEqual(3);
    });
    test('should return the nth Fibonacci number', () => {
        expect(fibonacci(5)).toEqual(5);
    });
    test('should return the nth Fibonacci number', () => {
        expect(fibonacci(6)).toEqual(8);
    });
    test('should return the nth Fibonacci number', () => {
        expect(fibonacci(25)).toEqual(75025);
    });
});