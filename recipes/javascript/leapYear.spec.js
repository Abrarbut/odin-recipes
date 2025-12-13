const leapYear = require('./leapYears.js');

describe('Leap Year Test', () => {
    test('Should be leap year', () => {
        expect(leapYear(2000)).toBe(true);
    });

    test('Should not be leap year', () => {
        expect(leapYear(1800)).toBe(false);
    });

    test('Should not be leap year', () => {
        expect(leapYear(1900)).toBe(false);
    });

    test('Should not be leap year', () => {
        expect(leapYear(1000)).toBe(false);
    });

    test('Should not be leap year', () => {
        expect(leapYear(1111)).toBe(false);
    });

    test('Should be leap year', () => {
        expect(leapYear(4444)).toBe(true);
    });

    test('Should be leap year', () => {
        expect(leapYear(2024)).toBe(true);
    });

})