const reversestring = require('./reverseString.js');

describe('Reverse String Test', () => {
    test('should return the reversed string', () => {
        expect(reversestring('hello there')).toBe('ereht olleh');
    }); 
});