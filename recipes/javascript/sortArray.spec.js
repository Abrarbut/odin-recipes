const { sortArray } = require("./sortArray.js");

describe("sortArray", () => {
    test("returns the sorted array", () => {
        let arr = [5, 3, 8, 1];
        let sorted = sortArray(arr);

        expect(sorted).toEqual([8, 5, 3, 1]);
    });
});