import { add, divide, multiply, subtract } from "../script";

describe("multiply", () => {
  test("3と10と3を渡したら、90が返ってくる。", () => {
    expect(multiply([3, 10, 3])).toBe(90);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(1);
    expect(() => multiply(args)).toThrowError("Too many arguments.");
  });
  test("計算結果が1,000を超える場合は、「big big number」を返す。", () => {
    expect(multiply([10, 10, 10])).toBe(1000);
    expect(multiply([10, 10, 10, 2])).toBe("big big number");
  });
});

describe("add", () => {
  test("3と10と3を渡したら、16が返ってくる。", () => {
    expect(add([3, 10, 3])).toBe(16);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(1);
    expect(() => add(args)).toThrowError("Too many arguments.");
  });
  test("計算結果が1,000を超える場合は、「too big」を返す。", () => {
    expect(add([999, 1])).toBe(1000);
    expect(add([999, 2])).toBe("too big");
  });
});

describe("subtract", () => {
  test("10と3を渡したら、7が返ってくる。", () => {
    expect(subtract([10, 3])).toBe(7);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(1);
    expect(() => subtract(args)).toThrowError("Too many arguments.");
  });
  test("計算結果がマイナスの場合は、「negative number」を返す。", () => {
    expect(subtract([2, 1, 1])).toBe(0);
    expect(subtract([2, 1, 1, 1])).toBe("negative number");
  });
});

describe("divide", () => {
  test("100と10を渡したら、10が返ってくる。", () => {
    expect(divide([100, 10])).toBe(10);
  });
  test("引数が31個の場合は、例外を返す。", () => {
    const args = new Array(31).fill(1);
    expect(() => divide(args)).toThrowError("Too many arguments.");
  });
  test("計算結果は、小数点10桁まで表示する。", () => {
    expect(divide([1, 3])).toBe(0.3333333333);
  });
});
