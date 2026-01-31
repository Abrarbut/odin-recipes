const { camelize } = require("./camelize.js");

describe("camelize", () => {

  test("returns the camelized string", () => {
    expect(camelize("background-color")).toEqual("backgroundColor");
  });

});
describe("camelize", () => {

  test("returns the camelized string", () => {
    expect(camelize("background-_-color")).toEqual("background_Color");
  });

});
describe("camelize", () => {

  test("returns the camelized string", () => {
    expect(camelize("back-_ground-color")).toEqual("back_groundColor");
  });

});
