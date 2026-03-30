import type { StateStorage } from "zustand/middleware"
export const MMKVStorage = {
  getString: (key: string) => localStorage.getItem(key),
  set: (key: string, value: string) => localStorage.setItem(key, value),
  delete: (key: string) => localStorage.removeItem(key),
}

export default class StorageService implements StateStorage {
  async getItem(key: string): Promise<string | null> {
    try {
      const value = localStorage.getItem(key)
      return value 
    } catch (error) {
      console.error("Error getting item from localStorage:", error)
      return null
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      localStorage.setItem(key, value)
    } catch (error) {
      console.error("Error setting item in localStorage:", error)
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error("Error removing item from localStorage:", error)
    }
  }
}
