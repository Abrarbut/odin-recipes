const findTheOldest = require('./findTheOldest');

describe('Find The Oldest Test', () => {
    test('should return the oldest person from the array', () => {
        const people = [
            { name: 'Alice', yearOfBirth: 1900, yearOfDeath: 1980 },
            { name: 'Bob', yearOfBirth: 1920, yearOfDeath: 2000 },
            { name: 'Charlie', yearOfBirth: 1950 } // still alive
        ];
        expect(findTheOldest(people)).toEqual({ name: 'Alice', yearOfBirth: 1900, yearOfDeath: 1980 });
    });

    test('should handle living people correctly', () => {
        const people = [
            { name: 'David', yearOfBirth: 1930 },
            { name: 'Eve', yearOfBirth: 1940, yearOfDeath: 2010 },
            { name: 'Frank', yearOfBirth: 1925, yearOfDeath: 1995 }
        ];
        expect(findTheOldest(people)).toEqual({ name: 'David', yearOfBirth: 1930 });
    });
});