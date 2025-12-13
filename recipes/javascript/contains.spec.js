const contains = require('./contains.js');

describe('Contains Test', () => {
    const meaningOfLifeArray = [42];
    const object = {
        a: 1,
        b: {
            c: 2,
            d: 3,
            e: {
                f: 4,
                g: {
                    h: {
                        i: 5
                    }
                }
            }
        }
    };
    test("false if no matching object reference", () => {
        expect(contains(object, [42])).toBe(false);
    });
    test("true if the provided string is a value within the object", () => {
        expect(contains(object, "foo")).toBe(false);
    });
    test("true if the provided string is a value within the object", () => {
        expect(contains(object, 5)).toBe(true);
    });
    test("true if the provided string is a value within the object", () => {
        expect(contains(object, 44645)).toBe(false);
    });
});