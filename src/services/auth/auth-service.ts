export interface AuthService {
  authenticate(username: string, password: string): Promise<string>;
}
