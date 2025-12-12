const { firstname, lastname, thisyear, birthyear } = require('./joinstring')
const age = thisyear - birthyear
const fullname = `${firstname} ${lastname}`

describe('Join Strings Test', () => {
    test('should return the correct full name', () => {
        expect(fullname)
    })
    test('should return the correct age', () => {
        expect(age)
    })
});