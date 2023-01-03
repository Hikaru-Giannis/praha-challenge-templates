// todo: ここに単体テストを書いてみましょう！

import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from "../functions";
import { NameApiService } from "../nameApiService";
import { DatabaseMock } from "../util";

describe("sumOfArrayのテスト", () => {
  test("配列の合計値が正しいか。", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });

  test("空配列の場合、合計値が0となるか。", () => {
    expect(sumOfArray([])).toBe(0);
  });
});

describe("asyncSumOfArrayのテスト", () => {
  test("配列の合計値が正しいか。", async () => {
    expect(await asyncSumOfArray([1, 2, 3])).toBe(6);
  });
  test("空配列の場合、合計値が0となるか。", async () => {
    expect(await asyncSumOfArray([])).toBe(0);
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
        save(_: number): void {
          throw new Error();
        },
      };
    });
    const database = new Database();
    expect(await asyncSumOfArraySometimesZero([], database)).toBe(0);
  });
});

// nameApiServiceをMock化
jest.mock("../nameApiService");
const NameApiServiceMock = NameApiService as jest.Mock;
describe("NameApiServiceのテスト", () => {
  test("名前が最大長を超えない場合は、そのまま名前を返すか。", async () => {
    NameApiServiceMock.mockImplementationOnce(() => {
      return {
        getFirstName(): string {
          return "John";
        },
      };
    });

    const nameApiServiceMock = new NameApiServiceMock();
    expect(await getFirstNameThrowIfLong(5, nameApiServiceMock)).toBe("John");
  });

  test("名前が最大長を超える場合、例外を返すか。", async () => {
    NameApiServiceMock.mockImplementationOnce(() => {
      return {
        getFirstName(): string {
          return "John";
        },
      };
    });

    const nameApiServiceMock = new NameApiServiceMock();
    const promise = async (): Promise<void> => {
      await getFirstNameThrowIfLong(3, nameApiServiceMock);
    };
    await expect(promise).rejects.toThrow(Error("first_name too long"));
  });
});
