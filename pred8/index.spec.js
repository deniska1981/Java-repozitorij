const sum = require("./sum");
const nadjiNajmanji = require("./najdiNajmanji");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("find minimum number in array", () => {
  const polje1 = [5, 8, 3, 5, 57, 9];
  const polje2 = ["52", 800, 300, "Dobar dan", 987, 900];
  const result1 = 3;
  const result2 = 300;
  const polje3 = "Antun";
  const result3 = undefined;

  expect(nadjiNajmanji(polje1)).toBe(result1);
  expect(nadjiNajmanji(polje2)).toBe(result2);
  expect(nadjiNajmanji(polje3)).toBe(result3);
});
