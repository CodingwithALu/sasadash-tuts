import type { Coordinate } from "recharts";
import type { IAddress } from "./AddressData.js";

export default interface LocationService {
  getCurrentAddress: (coordinate: { lat: number; lng: number }) => Promise<IAddress | null>
  getCurrentCoordinate: () => Promise<Coordinate | null>
  isNear: (location: Coordinate) => Promise<boolean>
  setThreshold: (threshold: number) => void
  decodeDirection: (code: string) => Promise<any>
  getAddressByCoordinate: (coordinate: Coordinate) => Promise<IAddress | null>
}

export const ERROR_HAVE_NOT_CALL_GET_ADDRESS =
  "Không thể thực hiện thao tác do chưa lấy được vị trí, vui lòng thử lại"
