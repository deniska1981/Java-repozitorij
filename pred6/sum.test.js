const { describe } = require("yargs");
const sum = require("./sum");

describe("sum function", () => {
  test("should successfully add numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(4, 2)).toBe(6);
    expect(sum(1, 8)).toBe(9);
    expect(sum(4, 3)).toBe(7);
  });

  test("should return Nan if wrong params passed", () => {
    let result = sum(1);
    expect(result).toBeNaN();
  });
});
