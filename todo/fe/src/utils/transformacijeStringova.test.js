import { uppercaseIusklicnik } from "./transformacijeStringova";

test("Should transform input string to upercase and add exclamation mark at the end", () => {
  expect(uppercaseIusklicnik("sime")).toBe("SIME!");
  expect(uppercaseIusklicnik("frane")).toBe("FRANE!");
  expect(uppercaseIusklicnik("u")).toBe("U!");
});
