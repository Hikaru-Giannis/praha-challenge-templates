import axios from "axios";
import { NameApiService } from "../nameApiService";

jest.mock("axios");
describe("nameApiService", () => {
  test("APIから最大長を超えない名前を取得した場合、そのまま名前を返すか。", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        first_name: "John",
      },
    });

    const nameApiSerive = new NameApiService(axios);
    expect(await nameApiSerive.getFirstName()).toBe("John");
  });

  test("APIから最大長を超える名前を取得し場合、例外を返すか。", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        first_name: "Michal",
      },
    });

    const nameApiSerive = new NameApiService(axios);
    expect(async () => await nameApiSerive.getFirstName()).rejects.toThrow(
      Error("firstName is too long!")
    );
  });

  test("APIへのリクエストに失敗した場合、例外を返すか。", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Failed!"));

    const nameApiSerive = new NameApiService(axios);
    expect(async () => await nameApiSerive.getFirstName()).rejects.toThrow();
  });
});
