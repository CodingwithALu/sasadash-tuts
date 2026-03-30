
import type { StateStorage } from "zustand/middleware"
import type LoginHelperService from "./LoginHelperService";

export default class StorageLoginHelperService implements LoginHelperService {
  private storage: StateStorage

  constructor(storage: StateStorage) {
    this.storage = storage
  }

  async saveLoginData(username: string, password: string) {
    await this.storage.setItem("login_data", JSON.stringify({ username, password }))
  }

  async getLoginData(): Promise<{ username: string; password: string } | null> {
    const data = await this.storage.getItem("login_data")
    if (!data) {
      return null
    }
    return JSON.parse(data)
  }
}
