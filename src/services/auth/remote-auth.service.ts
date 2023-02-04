import axios from "axios";
import { AuthService } from "./auth-service";

export class RemoteAuthService implements AuthService {
  async authenticate(username: string, password: string) {
    return axios
      .post("https://dummyjson.com/auth/login", { username, password })
      .then((response) => response.data.token as string)
      .catch(() => Promise.reject(null));
  }
}
