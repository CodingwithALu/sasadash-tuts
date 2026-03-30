import type { LocalImage } from "./LocalImage"


export const camera_unavailable_text = "Camera của thiết bị không hoạt động"
export const permission_text =
  "Chưa được cấp quyền máy ảnh. Vui lòng cung cấp quyền truy cập máy ảnh để thực hiện công việc chụp ảnh."

export const permission_text_library =
  "Chưa được cấp quyền máy ảnh. Vui lòng cung cấp quyền truy cập thư viện để thực hiện công việc đăng tải hình ảnh."
export const general_text = "Có lỗi xảy ra vui lòng thử lại"
export default interface CameraService {
  openCamera: () => Promise<LocalImage | null>
  openLibrary: () => Promise<LocalImage | null>
}
