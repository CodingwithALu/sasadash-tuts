import type { Coordinate } from "recharts"


export default interface LaunchNavigatorService {
  launch: (to: Coordinate) => Promise<void>
}

export const ERROR_HAVE_NOT_GET_LOCATION = "Không thể lấy được vị trí hiện tại, vui lòng thử lại"
