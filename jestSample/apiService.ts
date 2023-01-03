import axios from "axios";

export class ApiService {
  public async fetchUserName(userId: number): Promise<string> {
    const { data } = await axios
      .get("https://jsonplaceholder.typicode.com/users/" + userId)
      .catch((error) => {
        throw Error("Failed to fetch user.");
      });

    return data.name;
  }
}
