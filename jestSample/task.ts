import { resolve } from "path";
import { ApiService } from "./apiService";

// テスト1
export const numberFormat = (value: number) => {
  const formatter = new Intl.NumberFormat("jp-JP");
  return formatter.format(value);
};

// テスト2
export const bubbleSort = (arr: number[]) => {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

// テスト3
export const fetchUserName = async (
  userId: number,
  apiService: ApiService
): Promise<string> => {
  return new Promise((resolve): void => {
    try {
      const userName = apiService.fetchUserName(userId);
      resolve(userName);
    } catch (error) {
      resolve("");
    }
  });
};
