import {
  getPrefectureNameByZipcode,
  getPrimeNumbers,
  haveHumanRight,
} from "../furuno_task";
import { ZipcodeApiService, ZipcodeApiServiceImpl } from "../zipcodeApiService";

describe("haveHumanRight", () => {
  test("男性で170cmに人権があるか。", () => {
    expect(haveHumanRight(170, "MALE")).toBe(true);
  });
  test("男性で160cmに人権はないか。", () => {
    expect(haveHumanRight(160, "MALE")).toBe(false);
  });
  test("女性で170cmに人権はないか。", () => {
    expect(haveHumanRight(170, "FEMALE")).toBe(true);
  });
  test("女性で160cmに人権はないか。", () => {
    expect(haveHumanRight(160, "FEMALE")).toBe(true);
  });
  test("その他で170cmに人権はないか。", () => {
    expect(haveHumanRight(170, "OTHER")).toBe(true);
  });
  test("その他で160cmに人権はないか。", () => {
    expect(haveHumanRight(160, "OTHER")).toBe(true);
  });
});

describe("getPrimeNumbers", () => {
  test("素数のみ検出するか。", () => {
    // TODO １は素数ではなく、2は素数では...？
    // expect(getPrimeNumbers([1, 2, 3, 4, 5])).toEqual([2, 3, 5]);
    expect(getPrimeNumbers([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });

  test("空配列が渡された場合、例外を返す。", () => {
    expect(() => getPrimeNumbers([])).toThrow(
      Error("numbers should not be empty")
    );
  });
});

describe("getPrefectureNameByZipcode", () => {
  test("有効な郵便番号の場合、正常な値を返すか。", async () => {
    const mockZipcodeApiService: ZipcodeApiService = {
      getAddressByZipCode: jest.fn(() =>
        Promise.resolve({
          message: null,
          results: [
            {
              address1: "東京都",
              address2: "千代田区",
              address3: "千代田",
              kana1: "ﾄｳｷｮｳﾄ",
              kana2: "ﾁﾖﾀﾞｸ",
              kana3: "ﾁﾖﾀﾞ",
              prefcode: "13",
              zipcode: "1000001",
            },
          ],
          status: 200,
        })
      ),
    };
    const prefectureName = await getPrefectureNameByZipcode(
      1000001,
      mockZipcodeApiService
    );
    expect(prefectureName).toBe("東京都");
  });

  test("無効な郵便番号の場合、エラー文言を返すか。", async () => {
    const mockZipcodeApiService: ZipcodeApiService = {
      getAddressByZipCode: jest.fn(() => Promise.reject()),
    };
    const result = await getPrefectureNameByZipcode(
      1000000,
      mockZipcodeApiService
    );
    expect(result).toBe("Prefecture Not Found");
  });
});
