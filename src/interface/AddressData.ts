import type { IPlace } from "@/models/entity/ServiceBookEntity"
import type { AddressType } from "@/utils/enums"

export interface IAddress {
  id: string
  addressName?: string
  address?: string
  lat?: number
  lng?: number
  provider?: string
}

export interface ISavedAddress {
  id: number
  title: string
  addressType: AddressType
  address: IAddress | IPlace
  mapServiceType: string
}
