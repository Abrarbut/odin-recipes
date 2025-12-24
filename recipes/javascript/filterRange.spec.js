const { filterRange } = require("./filterRange.js");

describe("filterRange", () => {

  test("returns the filtered values", () => {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);

    expect(filtered).toEqual([3, 1]);
  });

  test("doesn't change the array", () => {
    let arr = [5, 3, 8, 1];
    filterRange(arr, 1, 4);

    expect(arr).toEqual([5, 3, 8, 1]);
  });

});
