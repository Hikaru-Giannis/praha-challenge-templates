// todo: ここに単体テストを書いてみましょう！

import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  sumOfArray,
} from "../functions";
import { DatabaseMock } from "../util";

describe("sumOfArrayのテスト", () => {
  test("配列の合計値が正しいか。", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });

  test("空配列の場合、例外となるか。", () => {
    expect(() => sumOfArray([])).toThrow(TypeError);
  });
});

describe("asyncSumOfArrayのテスト", () => {
  test("配列の合計値が正しいか。", async () => {
    expect(await asyncSumOfArray([1, 2, 3])).toBe(6);
  });

  test("空配列の場合、例外となるか。", async () => {
    const promise = async (): Promise<void> => {
      await asyncSumOfArray([]);
    };
    await expect(promise).rejects.toThrow(TypeError);
  });
});

// databaseをMock化
jest.mock("../util");
const Database = DatabaseMock as jest.Mock;
describe("asyncSumOfArraySometimesZeroのテスト", () => {
  test("配列の合計値が正しいか。", async () => {
    // TODO mockImplementationOnceとmockImplementationの違いを調べる。
    Database.mockImplementationOnce(() => {
      return {
        save(_: number): void {},
      };
    });
    const database = new Database();
    expect(await asyncSumOfArraySometimesZero([1, 2, 3], database)).toBe(6);
  });
  test("空配列の場合、例外となり0を返すか。", async () => {
    Database.mockImplementationOnce(() => {
      return {
        save(_: number): void {},
      };
    });
    const database = new Database();
    expect(await asyncSumOfArraySometimesZero([], database)).toBe(0);
  });
});
