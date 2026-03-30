/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://docs.infinite.red/ignite-cli/boilerplate/app/services/#backend-api-integration)
 * documentation for more details.
 */
import { ApisauceInstance, create } from "apisauce"
import { AxiosRequestConfig } from "axios"
import { constant } from "constans"
import { getModel, getUniqueIdSync } from "react-native-device-info"
import useUserStore from "stores/user.store"
import Config from "../../config"
import type { ApiConfig } from "./api.types"
import { CMD_KEY } from "./apiConstants"
import { MMKVStorage } from "../StorageService"

type TOptions = {
  cmd?: keyof typeof CMD_KEY
  params?: any
  config?: AxiosRequestConfig
}

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}
export const DEFAULT_API_SOCKET_CONFIG: ApiConfig = {
  url: Config.API_SOCKET_URL,
  timeout: 10000,
}

export const DEFAULT_API_GET_CONFIG: ApiConfig = {
  url: Config.API_CONFIG,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  get defaultParams() {
    const accessToken = MMKVStorage.getString("token")

    return {
      deviceID: getUniqueIdSync(),
      accessToken,
      platform: Platform.OS === "ios" ? 1 : 2,
      deviceInfo: getModel(),
      token: "1",
      countryCode: "84",
      email: "1",
      mapServiceType: constant.MAP_SERVICE,
    }
  }

  /**
   * Set base URL again
   */
  setBaseURL(baseURL: string) {
    this.apisauce.setBaseURL(baseURL)
  }

  /**
   * Makes a GET request to the specified URL and returns the response data.
   * @param url - The URL to make the GET request to.
   * @param config - Optional Axios request configuration.
   * @param version - Optional version api configuration.
   * @returns A Promise that resolves to the response data.
   * @throws An error if the request fails.
   */
  async get<T>(url: string, options?: Omit<TOptions, "cmd">): Promise<T> {
    const { newParams } = this.transformConfig(options)

    return this.apisauce.get<T>(url, newParams, options?.config) as Promise<T>
  }

  /**
   * Sends a POST request to the specified URL with the given data and configuration.
   * @template TRequest The type of the request data.
   * @template TResponse The type of the response data.
   * @param {string} url The URL to send the request to.
   * @param {TRequest} data The data to send with the request.
   * @param {AxiosRequestConfig} [config] The configuration for the request.
   * @returns {Promise<TResponse>} A promise that resolves with the response data.
   * @throws {AxiosError} If the request fails.
   */
  async post<T>(url: string, options?: TOptions): Promise<T>
  async post<S, T>(url: string, data?: Omit<S, "cmd">, options?: TOptions): Promise<T>
  async post<S, T>(url: string, data?: S, options?: TOptions): Promise<T> {
    const { newConfig } = this.transformConfig(
      (data as TOptions)?.cmd ? (data as TOptions) : options,
    )
    const newData = this.transformData<S>(
      (data as TOptions)?.cmd ? undefined : (data as S),
      ((data as TOptions)?.cmd ? (data as TOptions) : options)?.cmd,
    )

    return this.apisauce.post<T>(url, newData, newConfig) as Promise<T>
  }

  async postPartner<T>(url: string, options?: TOptions): Promise<T> {
    const { newConfig } = this.transformConfig(options)
    const newData = this.transformData<TOptions>(options, options?.cmd)

    return this.apisauce.post<T>(url, newData, newConfig) as Promise<T>
  }

  async getAllService<T>(options?: Omit<TOptions, "cmd">) {
    return this.get<T>("ButlAppServlet/user/services", options)
  }

  async postAllService<T>(options?: TOptions): Promise<T>
  async postAllService<S, T>(data?: Omit<S, "cmd">, options?: TOptions): Promise<T>
  async postAllService<S, T>(data?: S, options?: TOptions): Promise<T> {
    return this.post<S, T>(
      "ButlAppServlet/user/services",
      (data as TOptions)?.cmd ? undefined : (data as S),
      (data as TOptions)?.cmd ? (data as TOptions) : options,
    )
  }

  async postAllServicePartner<T>(options?: TOptions & any): Promise<T> {
    return this.postPartner<T>("ButlAppServlet/partner/services", options)
  }

  transformConfig(options?: TOptions) {
    const accessToken = MMKVStorage.getString("token")

    if (accessToken) {
      this.apisauce.setHeader("Authorization", "Bearer " + accessToken)
    } else {
      this.apisauce.setHeader("Authorization", "")
    }

    const newParams = Object.assign(
      {},
      options?.params,
      options?.cmd ? undefined : this.defaultParams,
    )

    const newConfig: any = Object.assign(
      {
        headers: {
          accept_token: accessToken || "",
        },
      },
      options?.config,
      Object.keys(newParams).length > 0 ? { params: newParams } : undefined,
    )

    return {
      newParams,
      newConfig,
    }
  }

  transformData<T>(data?: T, cmd?: keyof typeof CMD_KEY) {
    const dataTransformed = data ? { ...data, ...this.defaultParams } : this.defaultParams

    return cmd ? { cmd: CMD_KEY[CMD_KEY[cmd]], data: dataTransformed } : dataTransformed
  }
}

// Singleton instance of the API for convenience
export const apiService = new Api()
export const apiSocketService = new Api(DEFAULT_API_SOCKET_CONFIG)
export const apiConfig = new Api(DEFAULT_API_GET_CONFIG)

apiService.apisauce.addMonitor((response) => {
  const value = MMKVStorage.getString("token")

  if (response.data?.code === -1 && value) {
    NavigationServices.navigate("MainBottomTabs")
    NavigationServices.navigate("LoginScreen")
    MMKVStorage.set("token", "")
    useUserStore.setState({ user: null, isLogin: false })
  }
})

apiSocketService.apisauce.addMonitor((response) => {
  const value = MMKVStorage.getString("token")

  if (response.data?.code === -1 && value) {
    NavigationServices.navigate("MainBottomTabs")
    NavigationServices.navigate("LoginScreen")
    MMKVStorage.set("token", "")
    useUserStore.setState({ user: null, isLogin: false })
  }
})
