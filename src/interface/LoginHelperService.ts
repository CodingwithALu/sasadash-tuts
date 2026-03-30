export default interface LoginHelperService {
  saveLoginData(username: string, password: string): Promise<void>;
  getLoginData(): Promise<{username: string; password: string} | null>;
}
