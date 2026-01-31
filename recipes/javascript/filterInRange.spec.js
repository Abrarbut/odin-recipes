const { filter } = require("./filterInRange.js");

describe("filterInRange", () => {
    test("returns the filtered values", () => { 
        let arr = [5, 3, 8, 1];
        let filtered = filter(arr, 1, 4);

        expect(filtered).toEqual([3, 1]);
    }
    );
    
});
describe("filterInRange", () => {
    test("returns the filtered values", () => { 
        let arr = [1,2,3,4,5,6,7,8,9,10];
        let filtered = filter(arr, 1, 4);

        expect(filtered).toEqual([1,2,3,4]);
    }
    );
});