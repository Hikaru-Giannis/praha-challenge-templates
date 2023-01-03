import { ApiService } from "../apiService";
import { bubbleSort, fetchUserName, numberFormat } from "../task";

describe("numberFormat", () => {
  test("数値が正常にフォーマットしているか", () => {
    expect(numberFormat(1000)).toBe("1,000");
    expect(numberFormat(1000000)).toBe("1,000,000");
    expect(numberFormat(-1000)).toBe("-1,000");
    expect(numberFormat(1000.123)).toBe("1,000.123");
  });
});

describe("bubbleSort", () => {
  test("数値配列が正常にソートされているか。", () => {
    expect(bubbleSort([1, 3, 2, 5, 5, 4])).toEqual([1, 2, 3, 4, 5, 5]);
    expect(bubbleSort([])).toEqual([]);
  });
});

jest.mock("../apiService");
const ApiServiceMock = ApiService as jest.Mock;
describe("fetchUserName", () => {
  test("正常時に名前を返すか。", async () => {
    ApiServiceMock.mockImplementationOnce(() => {
      return {
        fetchUserName(userId: number): string {
          try {
            if (userId === 2) {
              throw new Error("Not found user.");
            }
            return "Leanne Graham";
          } catch (error) {
            console.error(error);
            return "";
          }
        },
      };
    });
    const apiService = new ApiServiceMock();
    expect(await fetchUserName(1, apiService)).toBe("Leanne Graham");
  });

  test("例外時は空文字列を返すか。", async () => {
    ApiServiceMock.mockImplementationOnce(() => {
      return {
        fetchUserName(userId: number): string {
          throw Error("Not found user.");
        },
      };
    });
    const apiService = new ApiServiceMock();
    expect(await fetchUserName(2, apiService)).toBe("");
  });
});
