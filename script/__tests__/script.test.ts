import { add, divide, multiply, subtract } from "../script";

describe("multiply", () => {
  test("3と10と3を渡したら、90が返ってくる。", () => {
    expect(multiply([3, 10, 3])).toBe(90);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(31);
    expect(() => multiply(args)).toThrowError("Too many arguments.");
  });
});

describe("add", () => {
  test("3と10と3を渡したら、16が返ってくる。", () => {
    expect(add([3, 10, 3])).toBe(16);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(31);
    expect(() => add(args)).toThrowError("Too many arguments.");
  });
});

describe("subtract", () => {
  test("10と3を渡したら、7が返ってくる。", () => {
    expect(subtract([10, 3])).toBe(7);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(31);
    expect(() => subtract(args)).toThrowError("Too many arguments.");
  });
});

describe("divide", () => {
  test("100と10を渡したら、10が返ってくる。", () => {
    expect(divide([100, 10])).toBe(10);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(31);
    expect(() => divide(args)).toThrowError("Too many arguments.");
  });
});
