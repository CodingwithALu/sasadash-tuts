import type { DonationsResponse } from "@/interface/finace/DonateData";
import type { GetPageRequest } from "@/interface/request/getpagerequest";

export default interface DataService {
    dogetDonations: (repuest: GetPageRequest) => Promise<DonationsResponse>
}