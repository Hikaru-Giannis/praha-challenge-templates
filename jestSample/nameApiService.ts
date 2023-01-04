import axios, { AxiosInstance } from "axios";

export class NameApiService {
  private MAX_LENGTH = 4;
  private client: AxiosInstance;
  public constructor(client: AxiosInstance = axios.create()) {
    this.client = client;
  }

  public async getFirstName(): Promise<string> {
    const { data } = await this.client.get(
      "https://random-data-api.com/api/name/random_name"
    );
    const firstName = data.first_name as string;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error("firstName is too long!");
    }

    return firstName;
  }
}
