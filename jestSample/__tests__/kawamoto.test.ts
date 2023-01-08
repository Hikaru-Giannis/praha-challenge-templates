import { getFuture, getFutureAsync, sleep } from "../kawamoto_task";

describe("getFuture", () => {
  test("現在の日時より、未来を返すか。", () => {
    expect(getFuture().getTime()).toBeGreaterThan(new Date().getTime());
  });
});

describe("sleep", () => {
  test("指定時間以上タイムアウトをしているか。", async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
    expect(end - start).toBeLessThan(200);
  });
});

describe("getFutureAsync", () => {
  test("現在の日時より、未来の日時を返すか。", async () => {
    const current = new Date().getTime();
    const future = await getFutureAsync();
    expect(future.getTime()).toBeGreaterThan(current);
  });
});
