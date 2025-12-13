const {convertToFahrenheit, convertToCelsius} = require('./tempConversion.js');

describe('Temperature Conversion Test', () => {
    test('should convert Fahrenheit to Celsius', () => {
        expect(convertToCelsius(32)).toBe(0);
    });
    test('should convert Celsius to Fahrenheit', () => {
        expect(convertToFahrenheit(0)).toBe(32);
    });
    test('should convert Fahrenheit to Celsius', () => {
        expect(convertToCelsius(-2)).toBe(-18.88888888888889);
    });
    test('should convert Celsius to Fahrenheit', () => {
        expect(convertToFahrenheit(23)).toBe(73.4);
    });
    test('should convert Fahrenheit to Celsius', () => {
        expect(convertToCelsius(100)).toBe(37.77777777777778);
    });
    test('should convert Celsius to Fahrenheit', () => {
        expect(convertToFahrenheit(50)).toBe(122);
    });

});
