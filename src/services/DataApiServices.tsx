import type { GetPageRequest } from "@/interface/request/getpagerequest";
import type DataService from "./DataService";
import type { DonationsResponse } from "@/interface/finace/DonateData";
import APIService from "./apiServices";
import type AuthenticationService from "@/interface/AuthenticationService";

export default class DataApiService implements DataService {
    private apiService: APIService
    constructor(authenService: AuthenticationService, baseUrl: string) {
        this.apiService = new APIService(authenService, baseUrl)
    }
    async dogetDonations(request: GetPageRequest): Promise<DonationsResponse> {
        try {
            const result = await this.apiService.dogetDonations(request.page, request.page_size)
            return result
        } catch (error) {
            throw error
        }
    }
}