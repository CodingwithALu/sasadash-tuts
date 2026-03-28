import type AuthenticationService from "@/interface/AuthenticationService";
import type { DonationsResponse } from "@/interface/finace/DonateData";
import { logger } from "@/models/logger";
import Toast from "react-native-toast-message"

export default class APIService {
    private authenService: AuthenticationService
    private BASE_URL: string
    private baseFunc = "ButAppServlet/user/service"
    constructor(authenService: AuthenticationService, baseURL: string) {
        this.authenService = authenService
        this.BASE_URL = baseURL
    }
    private queryParams(params: Record<string, any>): string {
        return Object.keys(params)
            .filter((k) => params[k] !== null && params[k] !== undefined)
            .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
            .join("&")
    }

    public get = async (
        func: string,
        params: Record<any, any> = {},
        preloads: Record<any, any> = {},
    ): Promise<Request> => {
        // console.log("log_preloads", preloads)
        const params_preloads = new URLSearchParams()
        for (const key in preloads) {
            if (Array.isArray(preloads[key])) {
                preloads[key].forEach((value: string) => {
                    params_preloads.append(key, value)
                })
            } else {
                params_preloads.append(key, preloads[key])
            }
        }
        // console.log("params_preloads", params_preloads.toString())
        const query = this.queryParams(params)
        let url = this.BASE_URL + func

        if (query || params_preloads) {
            url += "?" + query + params_preloads.toString()
        }
        const token = await this.authenService.getAuthen()

        logger.log("==========================")
        logger.log(`CALL API: GET - ${func}`)
        logger.log(url)
        logger.log(params)
        logger.log(`token: ${token}`)
        logger.log("==========================")

        return new Request(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}` || "",
            },
        })
    }

    public post = async (func: string, cmd: string, params: object = {}): Promise<Request> => {
        const url = this.BASE_URL + func
        const body = { cmd, data: params }
        const token = await this.authenService.getAuthen()

        logger.log("==========================")
        logger.log(`CALL API: POST - ${func}`)
        logger.log(url)
        logger.log(cmd)
        logger.log(params)
        logger.log(`token: ${token}`)
        logger.log("==========================")

        return new Request(url, {
            method: "POST",
            body: JSON.stringify(body, null, 2),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` || "",
            },
        })
    }

    public execute = async (request: Request): Promise<any> => {
        try {
            const responseJson = await fetch(request).then((response) => {
                return response.json()
            })

            const func = (() => {
                const url = request.url.split("?")[0]
                const parts = url.split("/")
                return parts[parts.length - 1]
            })()

            logger.log("==========================")
            logger.log(`RESPONSE API: ${request.method} - ${func}`)
            logger.log(request.url)
            logger.log(JSON.stringify(responseJson))
            logger.log("==========================")

            if (responseJson.code === 1) {
                if (responseJson.data) {
                    return responseJson.data
                }
            }

            if (responseJson.code == -1) {
                if (await this.authenService.isAuthen()) {
                    // Xoá token khi hết phiên đăng nhập
                    await this.authenService.clearAuthen()
                    Toast.show({ text1: "Có lỗi trong quá trình đăng nhập!", type: "error", topOffset: 60 })
                    // replace(routes.LoginScreen)
                    return
                }
            }
            const e = {
                statusCode: responseJson.code,
                message: responseJson.error_message,
            }
            throw e
        } catch (error: any) {
            if (error.message) {
                throw error
            }
            const e = {
                statusCode: -999,
                message: "Có lỗi xảy ra vui lòng thử lại",
            }
            throw e
        }
    }

    public getDefaultParams = async (): Promise<Record<string, any> | undefined> => {
        try {
            const params: Record<string, any> = {}
            // params.deviceID = await DeviceInfo.getUniqueId()
            // params.accessToken = await this.authenService.getAuthen()
            // params.platform = Platform.OS === "ios" ? 1 : 2
            // params.deviceInfo = await DeviceInfo.getModel()
            // params.token = "1"
            // params.countryCode = "84"
            // params.email = "1"
            // params.mapServiceType = constant.MAP_SERVICE
            // params.upVersion = Config.VERSION_APP

            return params
        } catch (error) {
            console.log("ERROR", error)
            throw error
        }
    }

    public dogetDonations = async (page: number, page_size: number): Promise<DonationsResponse> => {
        try {
            const parmas = await this.getDefaultParams()
            if (!parmas) {
                throw new Error("Failed to get default params")
            }
            parmas.page = page
            parmas.page_size = page_size
            const request = await this.post(this.baseFunc, "donations", parmas)
            return await this.execute(request)
        } catch (error) {
            throw error
        }
    }
}