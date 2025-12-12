const repeatString = require("./repeatString.js");

describe("Repeat String Test", () => {
    test("should return the string repeated the specified number of times", () => {
        expect(repeatString("abc", 3)).toBe("abcabcabc");
    });

    test("should return an empty string when repeated zero times", () => {
        expect(repeatString("xyz", 0)).toBe("");
    });
    test("should return ERROR when num < 0", () => {
        expect(repeatString("xyz", -1)).toBe("ERROR");
    });

});