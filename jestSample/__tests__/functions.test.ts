// todo: ここに単体テストを書いてみましょう！

import { sumOfArray } from "../functions";

test("sumOfArray: total array value to equal.", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
  expect(() => sumOfArray([])).toThrow(TypeError);
});
