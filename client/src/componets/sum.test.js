const sum = require("./sum");

test("properly added the amount", () => {
  expect(sum(1, 2)).toBe(3);
});
