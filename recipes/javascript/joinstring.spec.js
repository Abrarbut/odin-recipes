const values = require('./joinstring')

describe('Join Strings Test', () => {
    test('should return the correct full name', () => {
        expect(values.fullname).toBe("Abrar Butt")
    })
    test('should return the correct age', () => {
        expect(values.age).toEqual(values.thisyear - values.birthyear)    
    })
    test('greeting', () => {
        expect(values.greeting).toEqual("Hello! My name is Abrar Butt and I am 21 years old.")  
    })
});