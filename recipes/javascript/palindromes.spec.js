const palindrome = require('./palindromes.js');

describe('Palindrome Test', () => {
    test('should return true for a palindrome array', () => {
        expect(palindrome("a car a")).toEqual(false);
    });
    test('should return true for a palindrome array', () => {
        expect(palindrome("A car, a man, a maraca")).toEqual(true);
    });
    test('should return true for a palindrome array', () => {
        expect(palindrome("Lid off a daffodil")).toEqual(true);
    });
    test('should return true for a palindrome array', () => {
        expect(palindrome("Rats live on no evil star")).toEqual(true);
    });
    test('should return false for a non-palindrome string', () => {
        expect(palindrome("a aacar a")).toEqual(false);
    });
    test('should return false for a non-palindrome string', () => {
        expect(palindrome("asdfsdhk a")).toEqual(false);
    });
    test('should return true for a palindrome string', () => {
        expect(palindrome("A nut for a jar of tuna. ")).toEqual(true);
    });
    test('should return false for a non-palindrome string', () => {
        expect(palindrome("#$%&^*^%^BGHGHV ")).toEqual(false);
    });

});