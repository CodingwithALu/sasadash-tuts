import { News } from "interfaces/response/GetNewsResponse"
import { ISavedAddress } from "interfaces/AddressData"
import { GetFlashSaleResponse } from "interfaces/response/GetFlashSaleResponse"
import { Reason } from "interfaces/response/GetReasonResponse"
import { Banner } from "interfaces/response/DoGetBannerResponse"
import { IAddress } from "models/entity/ServiceBookEntity"
import { ChatBotSearchAddressRequest } from "interfaces/response/ChatbotResponse"
import { GetDetailDriverInviteUser, GetInfoDriverInviteUser } from "screens/driverShare/interface"

export default interface IDataApiSocketService {
  doBookFind: (request: {
    goID: number
    vehicle_type_id: number
    isCallButl: boolean
  }) => Promise<any>
  getNews: () => Promise<News[]>
  doCanBook: (request: { goID?: number | null }) => Promise<any>
  doCanGo: (request: { goID: number; reason: string }) => Promise<any>
  getSavedAddress: () => Promise<IAddress[]>
  addSavedAddress: (request: ISavedAddress) => Promise<ISavedAddress>
  deleteSavedAddress: (address_id: number) => Promise<any>
  editSavedAddress: (request: ISavedAddress) => Promise<ISavedAddress>
  getFlashSale: () => Promise<GetFlashSaleResponse>
  userAddFlashSale: (request: { flashSaleId: number; flashSaleDetailId: number }) => Promise<any>
  getReasons: (type: number) => Promise<Reason[]>
  getBanner: (type: string) => Promise<Banner[]>
  doPostCreatePushIsLand: (data: {
    go_id: number
    type: 1 | 2 | 0
    push_island_id: string
  }) => Promise<any>
  openChatbot: () => Promise<any>
  chatBotSearchAddress: (data: ChatBotSearchAddressRequest) => Promise<any>
  chatBotTracking: (action: string) => Promise<any>
  getInfoDriverInviteUser: () => Promise<GetInfoDriverInviteUser>
  getDetailDriverInviteUser: (page: number, size: number) => Promise<GetDetailDriverInviteUser>
  getAllConfig: () => Promise<any>
  lookupColdFine: (card_number: string, vehicle_model: string) => Promise<any>
  subscribeColdFineNoti: (card_number: string, vehicle_model: string) => Promise<any>
  unsubscribeColdFineNoti: () => Promise<any>
  getSubscriptionColdFineNoti: () => Promise<any>
}
