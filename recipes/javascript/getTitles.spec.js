const getTitles = require('./getTitles.js');

describe('getTitles', () => {
    test('should return an array of book titles', () => {
        const books = [
            { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
            { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
            { title: '1984', author: 'George Orwell' }
        ];

        expect(getTitles(books)).toEqual([
            'The Great Gatsby',
            'To Kill a Mockingbird',
            '1984'
        ]);
    });
});
