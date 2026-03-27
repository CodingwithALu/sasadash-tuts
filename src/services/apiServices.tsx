import type AuthenticationService from "@/interface/AuthenticationService";

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
        const params_preloads = new URLSearchParams()
        for (const key in preloads) {
            if (Array.isArray(preloads[key])) {
                preloads[key].forEach((value: string) => {

                })
            }
        }
    }
}