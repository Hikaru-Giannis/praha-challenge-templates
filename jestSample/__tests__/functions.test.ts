// todo: ここに単体テストを書いてみましょう！

import { asyncSumOfArray, sumOfArray } from "../functions";

test("sumOfArray: total array value to equal.", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
});

test("sumOfArray: throw exception.", () => {
  expect(() => sumOfArray([])).toThrow(TypeError);
});

test("asyncSumOfArray: total array value to equal.", async () => {
  expect(await asyncSumOfArray([1, 2, 3])).toBe(6);
});

test("asyncSumOfArray: throw exception.", async () => {
  const promise = async (): Promise<void> => {
    await asyncSumOfArray([]);
  };
  await expect(promise).rejects.toThrow(TypeError);
});
