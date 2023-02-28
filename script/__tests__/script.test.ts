import { add, divide, multiply, subtract } from "../script";

test("multiply", () => {
  expect(multiply([3, 10, 3])).toBe(90);
});

test("add", () => {
  expect(add([3, 10, 3])).toBe(16);
});

test("subtract", () => {
  expect(subtract([10, 3])).toBe(7);
});

test("divide", () => {
  expect(divide([100, 10])).toBe(10);
});
